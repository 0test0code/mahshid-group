import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export const setCookie = async (userId:any) =>{
    if(!process.env.JWT_SECRET){
        throw new Error ("JWT secret is not defined.");
    }
    //Generate the token
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "1d"});
    //Set the Cookie
    const cookieStore = cookies();
    cookieStore.set("token", token,{  
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1 *24*60*60,
        expires: Date.now() + 24*60*60*1000*1,
        path:"/menu-games/:path*"
       
    });
    return token;
}