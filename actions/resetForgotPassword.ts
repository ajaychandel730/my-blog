"use server";
import client from "@/lib/dbConnect";
import { verifyResetToken } from "@/lib/jose";
import { signupSchema } from "@/lib/zodDefinations/userSchema";
import { getErrorMessage } from "@/utils/errors";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

// schema
const resetForgotPasswordSchema = signupSchema
  .pick({
    password: true,
    repeatPassword: true,
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Password and repeat password don't match",
    path: ["repeatPassword"],
  });
//

// action
export default async function (
  preState: unknown,
  formData: FormData
) {

  console.log("------------------>hit--------");
  try {
    const result = resetForgotPasswordSchema.safeParse({
      password: formData.get("password"),
      repeatPassword: formData.get("repeatPassword"),
    });

    
    if (!result.success) {
      return { status: 400, errors: result.error.flatten().fieldErrors };
    }

    const { password } = result.data;

    // verify cookie reset_token
     const reset_token = (await cookies()).get("reset_token")?.value;
      console.log("reset_token:", reset_token);
     if(typeof reset_token !== "string"){
        return {
          status : 400,
          message : "Link is expired. Please try again."
        }
     }

      const payload = await verifyResetToken(reset_token);
      console.log("payload:", payload);
      const userObjectId = new ObjectId(payload.id);

    // secure password
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    //
    const userCollection = client.db("blogz").collection("users");
    // confirm user id
  
    const user = await userCollection.findOne({ _id: userObjectId }, {projection : {_id : 1}});
    
    if (!user) {
      return {
        status: 400,
        message: "User not found. Please go back and try again.",
      };
    }
    
    // update password with hashed password
    const updatePassword = await userCollection.updateOne(
      { _id: user._id },
      { $set: { password: hashedPassword } }
    );

    if (updatePassword.modifiedCount == 0) {
      return {
        status: 500,
        message: "Unable to update password.",
      };
    }
    console.log("password updated successfully");
    return {
      status: 200,
      message: "Password changed successfully.",
    };
  } catch (err) {
    (await cookies()).delete("reset_token");
    console.log("error:", getErrorMessage(err));

    return {
      status: 500,
      message: "Link is expired. Please try later.",
    };
  }
}
