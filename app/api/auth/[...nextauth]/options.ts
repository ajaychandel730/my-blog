import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import client from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const nextAuthOptions:NextAuthOptions =  {
    pages: {
      signIn: "/signin",
    },
    session: {
      strategy: "jwt",
    },
    secret: process.env.AUTH_SECRET,
    providers: [
      CredentialsProviders({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: {},
          password: {},
        },
        async authorize(credentials) {
          const db = client.db("blogz");
          const userCollection = db.collection("users");
          if(!credentials?.email){
             throw new Error("Enter your email.");
          }
          if(!credentials.password){
            throw new Error("Enter your password.")
          }
          const user = await userCollection.findOne({
            email: credentials?.email,
          });
         
          if (!user || !("email" in user) || !("password" in user)) {
            throw new Error("user not found.");
          }
  
          const passwordMatch = await bcrypt.compare(
            String(credentials?.password),
            user.password
          );
  
          if (!passwordMatch) {
            throw new Error("Password not matched.");
          }
          
          return {
            id: user._id.toString(),
            email: user.email,
            password: user.password,
            name : user.name || user.email.split('@')[0],
            image : user.image || "https://res.cloudinary.com/instagram-clone-images-27017/image/upload/v1643711892/instagram/blank-profile-picture-g38b61f937_640_onexzk.png",
          };
        },
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        return true;
      },
      async redirect({ url, baseUrl }) {
        return baseUrl;
      },
      async session({ session, token}) {
        if (token) {
          session.user.id = token.id;
          session.user.name = token.name;
          session.user.image = token.picture;
          session.user.email = token.email;
        }
  
        return session;
      },
      async jwt({ token, user, account, profile }) {
        if (user) {
          token.id = user.id;
          token.name = user.name;
          token.picture = user.image;
          token.email = user.email;
        }

        return token;
      },
    },
  }