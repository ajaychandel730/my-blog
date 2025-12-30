import { User } from "../types";

const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const res = await fetch("/api/getUserByEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const userRes = await res.json();

    if (userRes.status == "ok" && "user" in userRes) {
      const {
        user: { _id, email, password, name, image },
      } = userRes;

      const user: User = {
        _id: _id || "",
        email: email || "",
        password : password || "",
        name : name || "",
        image : image || "https://res.cloudinary.com/instagram-clone-images-27017/image/upload/v1643711892/instagram/blank-profile-picture-g38b61f937_640_onexzk.png"
      };

      return user;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

export { getUserByEmail };
