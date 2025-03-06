"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3000/api/log-in", {
        email,
        password,
      });
      setIsLoading(false);
      toast.success(response.data.message);
      router.push("/");
    } catch (error: any) {
      setIsLoading(false);
      console.log("Error in log in: ", error.message);
      toast.error("Password must be at least 8 characters!");
    }
  };

  return (
    <div className="absolute  justify-center items-center min-h-[100vh]  -mt-2 -mr-8">
      <div className=" mx-auto  flex justify-center items-center min-h-[100vh] py-10  px-4 md:px-6  max-w-[90%] -mt-37">
      <div className="bg-white shadow-lg p-10 rounded-xl">
        <h2 className="font-semibold  text-lg md:text-lg text-center">
          Log in
        </h2>
        <p className="text-gray-700 text-sm mt-1 text-center">
          Welcome back! Please log in to continue
        </p>

        <form onSubmit={handleLogin} className="mt-6">
          <div className="flex flex-col text-sm mt-6">
            <label className="font-[500] mb-1">Email address</label>
            <input
              type="email"
              className="border border-gray-400 px-3 py-1.5 rounded-lg mt-1 text-gray-700 font-[400]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>

          <div className="flex flex-col text-sm mt-6">
            <label className="font-[500] mb-1">Password</label>
            <input
              type="password"
              className="border border-gray-400 px-3 py-1.5 rounded-lg mt-1 text-gray-700 font-[400]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center mt-8 w-full">
            <div className="w-full">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center bg-[#0077b6] rounded-lg px-2 py-2 text-sm font-medium text-gray-50 hover:bg-[#023e8a] w-full md:w-96"
              >
                Log in
              </button>
            </div>
          </div>
        </form>

        <div className="text-center text-sm mt-6">
          <p>
            Don't have an account?{" "}
            <Link href={"/sign-up"} className="text-[#0077b6]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default LoginPage;
