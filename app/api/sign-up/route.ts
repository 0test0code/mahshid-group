import { connectDB } from "../config/db";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";
import { setCookie } from "@/app/Cookies/setCookie";
import validateEmail from "@/app/helpers/validateEmail";
import validatePassword from "@/app/helpers/validatePassword";

export async function POST(request: Request) { 
  // connect to database
  await connectDB();

  const body = await request.json();
  const { username, email, password } = body;
  //Validate the data
  if (!validateEmail(email) || !validatePassword(password)){
    return Response.json({ error : "Invalid email or password!"} , {status : 400});
  }

  try {
    if (!email || !password || !username) { Response.json({message : "All fields are required."} );
      throw new Error("All fields are required.");
                                          }
    const userEmailExists = await User.findOne({ email });

    if (userEmailExists) {
      return Response.json(
        { message: "User already exists." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
// Create a user

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    }); // Set Cookies 

    await setCookie(user._id);

    return Response.json(
      {
        message: "Congrats!User created successfully.",
        user: { ...user.toObject(), password: undefined },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("<User To object> : Error creating credentials<User To object>");

    return Response.json({ message: error.message }, { status: 400 });
  }
}
export const runtime = 'edge';
