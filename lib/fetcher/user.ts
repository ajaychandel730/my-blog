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
        user: { _id, email, password },
      } = userRes;

      const user: User = {
        _id: _id || "",
        email: email || "",
        password : password || ""
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
