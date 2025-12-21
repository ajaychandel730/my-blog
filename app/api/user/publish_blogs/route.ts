import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { nextAuthOptions } from "../../auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";
import clientPromise from "@/lib/dbConnect";

export  async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const page: number = Number(searchParams.get("page"));
    const limit: number = Number(searchParams.get("limit"));
    const session = await getServerSession(nextAuthOptions);

    if (session && "id" in session.user) {
      const client = await clientPromise;
      const collection = client.db("blogz").collection("blogs");
      const objectUserId = new ObjectId(session.user.id);
      const blogs = await collection
        .find({ userId: objectUserId }, {sort :{_id : -1},  skip: (page - 1) * limit, limit })
        .toArray();
      
      return NextResponse.json(
        { status: "ok", result: blogs },
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
