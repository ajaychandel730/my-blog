import { MongoClient } from "mongodb";
import { getErrorMessage } from "@/utils/errors";

const MONGO_URI: string | undefined = process.env?.MONGO_URI;
let options = {};

if (!MONGO_URI) {
  throw new Error("Please define MONGO_URI.");
}

let globalWithMongo: GlobalWithMongo = global;
let client: MongoClient;
let clientPromise: MongoClient;

async function dbConnect(): Promise<MongoClient> {
  try {
    if (!MONGO_URI) {
      throw new Error("Please define MONGO_URI.");
    }

    if (clientPromise) {
      return clientPromise;
    }

    if (process.env.NODE_ENV !== "production") {
      if (!globalWithMongo?._mongoClientPromise) {
        client = new MongoClient(MONGO_URI, options);
        globalWithMongo._mongoClientPromise = await client.connect();
      }
      clientPromise = globalWithMongo._mongoClientPromise;
    } else {
      client = new MongoClient(MONGO_URI, options);
      clientPromise = await client.connect();
    }

    return clientPromise;
  } catch (err: unknown) {
    throw new Error(getErrorMessage(err));
  }
}

export { dbConnect };

type GlobalWithMongo = typeof globalThis & {
    _mongoClientPromise?: MongoClient;
  };