import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { nextAuthOptions } from "../../auth/[...nextauth]/options";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import { UserRole } from "@/types/user";

export async function GET(req: NextRequest) {
  try {
    await rateLimitHandler();
    const { searchParams } = req.nextUrl;
    const page: number = Number(searchParams.get("page"));
    const limit: number = Number(searchParams.get("limit"));
    const session = await getServerSession(nextAuthOptions);

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return NextResponse.json({
        status: "error",
        message: "Someting went wrong.",
      });
    }

    if (session && session.user.role === UserRole.USER) {
      const client = await clientPromise;
      const collection = client.db("blogz").collection("messages");
      const objectUserId = new ObjectId(session.user.id);
      const messages = await collection
        .find({}, { sort: { _id: -1 }, skip: (page - 1) * limit, limit })
        .toArray();

      return NextResponse.json(
        { status: "ok", result: messages },
        { status: 200 }
      );
    } else {
      return NextResponse.json({
        status: "error",
        message: "Someting went wrong.",
      });
    }
  } catch (err) {
    console.log("Error message:", getErrorMessage(err));
    return NextResponse.json({
      status: "error",
      message: "Someting went wrong.",
    });
  }
}
