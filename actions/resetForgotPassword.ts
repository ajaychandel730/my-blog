import client from "@/lib/dbConnect";
import { signupSchema } from "@/lib/zodDefinations/userSchema";
import { getErrorMessage } from "@/utils/errors";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

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
  try {
    const result = resetForgotPasswordSchema.safeParse({
      password: formData.get("password"),
      repeatPassword: formData.get("repeatPassword"),
    });

    const userId = formData.get("userId") as string;
    
    if (!result.success) {
      return { status: 400, errors: result.error.flatten().fieldErrors };
    }

    const { password, repeatPassword } = result.data;
    // secure password
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    //
    const userCollection = client.db("blogz").collection("users");
    // confirm user id
    const userObjectId = new ObjectId(userId); // convert string into mongodb _id
    const user = await userCollection.findOne({ _id: userObjectId });
    if (!user) {
      return {
        status: 400,
        message: "Unable to continue. Please go back and try again.",
      };
    }
    // update password with hashed password
    const updatePassword = await userCollection.updateOne(
      { _id: user._id },
      {
        password: hashedPassword,
      }
    );

    if (updatePassword.modifiedCount == 0) {
      return {
        status: 500,
        message: "Unable to update password.",
      };
    }

    return {
      status: 200,
      message: "Password changed successfully.",
    };
  } catch (err) {
    console.log("error:", getErrorMessage(err));
    return {
      status: 500,
      message: "Something went wrong. Please try later.",
    };
  }
}
