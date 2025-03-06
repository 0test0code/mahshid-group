
import jwt, { JwtPayload } from "jsonwebtoken";
import { connectDB } from "../config/db";
import User from "../models/user.model";

import { setCookie } from "@/app/Cookies/setCookie"
import { cookies } from "next/headers";

export async function GET(request: Request) {
  await connectDB();
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return Response.json({ message: "Unauthorised." }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET as string);

    if (!decoded) {
      return Response.json("Unauthorised - invalid token");
    }

    const userId = (decoded as JwtPayload).userId;

    const user = await User.findById(userId).select("-password"); // remove the password

    if (!user) {
      return Response.json({ message: "User not found." }, { status: 400 });
    }
       await setCookie(user._id);
        

    return Response.json({ user }, { status: 200 });
  } catch (error: any) {
    console.log("Error in fetching user", error);
    return Response.json({ message: error.message }, { status: 400 });
  }
}