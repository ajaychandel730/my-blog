import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { nextAuthOptions } from "../../auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import client from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";

export  async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const page: number = Number(searchParams.get("page"));
    const limit: number = Number(searchParams.get("limit"));
    const session = await getServerSession(nextAuthOptions);

    if (session && "id" in session.user) {
      const collection = client.db("blogz").collection("drafts");
      const objectUserId = new ObjectId(session.user.id);
      const drafts = await collection
        .find({ userId: objectUserId }, { skip: (page - 1) * limit, limit })
        .toArray();
      console.log("drafts:", drafts);
      return NextResponse.json(
        { status: "ok", result: drafts },
        { status: 200 }
      );
    }
  } catch (err) {
    console.log("Error message:", getErrorMessage(err));
    return NextResponse.json({
      status: "error",
      message: "Someting went wrong.",
    });
  }

  redirect("/signin");
}
