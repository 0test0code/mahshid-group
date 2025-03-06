import { cookies } from "next/headers";
import { connectDB } from "../config/db";

export async function POST(request: Request) {
  await connectDB();
  try {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    return Response.json(
      { message: "Logged out successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error logging out", error);
    return Response.json({ message: "Error logging out" }, { status: 400 });
  }
}