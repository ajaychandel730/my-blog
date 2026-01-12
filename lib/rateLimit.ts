import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const defaultLimit = Number(process.env.RATE_LIMIT);
const isProd = process.env.NODE_ENV === "production";

/* ---------- DEV (Map) ---------- */
const requests = new Map<string, { count: number; time: number }>();

function memoryRateLimit(
  key: string,
  limit: number = defaultLimit,
  windowMs: number = 60000
) {
  const now = Date.now();
  const entry = requests.get(key);

  if (!entry || now - entry.time > windowMs) {
    requests.set(key, { count: 1, time: now });
    return true;
  }

  if (entry.count > limit) {
    return false;
  }

  entry.count++;
  return true;
}

/* ---------- PROD (Redis) ---------- */
const redis = isProd ? Redis.fromEnv() : null;

/* ---------- PUBLIC API ---------- */
export async function rateLimit(
  key: string,
  limit: number = defaultLimit,
  windowMs: number = 60000
) {
  if (!isProd) {
    return memoryRateLimit(key, limit, windowMs);
  }

  if (redis == null) {
    return false;
  }

  const redisLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(limit, "1m"),
  });

  const { success } = await redisLimiter!.limit(key);
  return success;
}
