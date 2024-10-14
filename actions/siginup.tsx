"use server";
import { FormState, signupFormSchema } from "@/lib/zodDefinations/userSchema";
import client from "@/lib/dbConnect";
import { getErrorMessage } from "@/utils/errors";
import bcrypt  from "bcrypt";


const signup = async (state: FormState, formData: FormData) => {

  try {
    const validatedFields = signupFormSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
      repeatPassword : formData.get("repeatPassword")
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    
    const database = client.db("blogz");
    const userCollection = database.collection("users");
    const { email, password } = validatedFields.data;
    const hashedPassword:string = await bcrypt.hash(password, 10);
    // check user email alread exist or not
    const checkUser = await userCollection.findOne({email});
    if(checkUser){
      return {
        errors : {
          email : ["An account with email address already exists."]
        }
      }
    }
    
    const user = await userCollection.insertOne({
      email,
      password : hashedPassword,
    });
    
    if(!user.acknowledged || !user.insertedId){
      return {
        error : {
          server : true
        },
        message: "An error occurred while creating your account.",
      };
    }

    return {
      message : "successfull"
    }
    
  } catch (err: unknown) {
    console.log(getErrorMessage(err));
    return {
      error : {
        server : true
      },
      message: "An error occurred while creating your account.",
    };
  }
};

export { signup };
