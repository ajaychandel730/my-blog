import { getErrorMessage } from "@/utils/errors";

export default async function (pathname: string) {
  try {
    const res = await fetch(process.env.DOMAIN_NAME + pathname);
    const data = await res.json();

    if (data.status === "ok") {
      return data.result;
    }
    return [];
  } catch (err) {
    console.log("error:", getErrorMessage(err));
    return [];
  }
}
