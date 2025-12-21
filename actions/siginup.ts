"use server";
import { FormState, signupFormSchema } from "@/lib/zodDefinations/userSchema";
import { getErrorMessage } from "@/utils/errors";
import bcrypt from "bcrypt";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";
import clientPromise from "@/lib/dbConnect";

const signup = async (state: FormState, formData: FormData) => {
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
    const validatedFields = signupFormSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
      repeatPassword: formData.get("repeatPassword"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    const client = await clientPromise;
    const database = client.db("blogz");
    const userCollection = database.collection("users");
    const { email, password } = validatedFields.data;
    const hashedPassword: string = await bcrypt.hash(password, 10);

    // check user email alread exist or not
    const checkUser = await userCollection.findOne({ email });
    if (checkUser) {
      return {
        errors: {
          email: ["An account with this email already exists."],
        },
      };
    }

    const user = await userCollection.insertOne({
      email,
      joinDate: new Date(),
      name: email.split("@")[0],
      image: process.env.USER_DEFAULT_IMAGE,
      password: hashedPassword,
    });

    if (!user.acknowledged || !user.insertedId) {
      return {
        error: {
          server: true,
        },
        message: "An error occurred while creating your account.",
      };
    }

    return {
      message: "successfull",
    };
  } catch (err: unknown) {
    console.log("error:", getErrorMessage(err));
    return {
      error: {
        server: true,
      },
      message: "An error occurred while creating your account.",
    };
  }
};

export { signup };
