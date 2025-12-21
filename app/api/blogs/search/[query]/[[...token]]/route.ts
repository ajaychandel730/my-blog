import { NextResponse } from "next/server";
import { getErrorMessage } from "@/utils/errors";
import getSearchBlogs, { serverBlogCard } from "@/actions/getSearchBlogs";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";

type Params = {
  params: Promise<{ query: string; token?: string[] }>;
};

export async function GET(request: Request, { params }: Params) {
  try {
    // limiting
    const headerList = await headers();
    const ip =
      headerList.get("x-forwarded-for") ??
      headerList.get("x-real-ip") ??
      "unknown";

    if (!rateLimit(ip)) {
      throw new Error("Too many requests");
    }
    //
    const { query, token } = await params;
    const Searchquery = decodeURIComponent(query);
    const searchToken: string | undefined = token
      ? decodeURIComponent(token[0])
      : undefined;
    const result: serverBlogCard[] = await getSearchBlogs(
      Searchquery,
      searchToken
    );
    return NextResponse.json({ status: "ok", result }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: getErrorMessage(err) },
      { status: 500 }
    );
  }
}
