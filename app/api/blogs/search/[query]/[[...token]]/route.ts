import { NextResponse } from "next/server";
import { getErrorMessage } from "@/utils/errors";
import getSearchBlogs, { serverBlogCard } from "@/actions/getSearchBlogs";

type Params = {
  params: Promise<{ query: string, token?:string[]}>;
};

export async function GET(request: Request, { params }: Params) {
  try {
    const {query, token} = await params;
    console.log('api call');
    const Searchquery = decodeURIComponent(query);
    const searchToken:(string|undefined) = token? decodeURIComponent(token[0]) : undefined;
     const result:serverBlogCard[] = await getSearchBlogs(Searchquery, searchToken);
    return NextResponse.json({ status: "ok", result }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "error",  message: getErrorMessage(err) },
      { status: 500 }
    );
  }
}
