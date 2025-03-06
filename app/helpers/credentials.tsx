"use client";
import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { FaAngleDoubleDown } from "react-icons/fa";
import {FaSpinner} from "react-icons/fa";

export default function Credentials() {  const t = useTranslations('Navbar');
  const [user, setUser] = useState<any>(null); // Default to null
  const [isFetchingUser, setIsFetchingUser] = useState(true); // Start fetching as true
  const [toggleDropdown, setToggleDropdown] = useState(false); 
  //windows
            // const [toggleMenu, setToggleMenu] = useState(false);
  //const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/fetch-user")
      .then((response) => setUser(response.data.user))
      .catch((error) => console.error("Error fetching user:", error))
      .finally(() => setIsFetchingUser(false)); // Done fetching
  }, []);

  // useEffect(() => {
  //   if (!isFetchingUser && user === null) {
  //     router.push("/log-in"); // Redirect to login if no user
  //   }
  // }, [isFetchingUser, user, router]);
  
  if (isFetchingUser) {
    return (<i className="mt-8 text-lg text-lime-400"><FaSpinner className=" fa fa-spinner fa-spin animate-spin"/><p className="mt-2  animate-bounce ">Loading...</p></i>); // Show loading while fetching user
  }

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/log-out");
      toast.success(response.data.message);
      
    } catch (error) {
      toast.error("Failed to log out.");
      console.error("Logout error:", error);
    }
  };

  // winows size
  //       const toggleNav = () => {
  //         setToggleMenu(!toggleMenu)
                               // }

//  useEffect(() => {

  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   }

  //   window.addEventListener('resize', changeWidth)

  //   return () => {
  //       window.removeEventListener('resize', changeWidth)
  //   }

  // }, [])

  //end window size

  return <div className="flex   justify-between ">
       

      
    {user ? (
    <div onClick={()=>setToggleDropdown((prev)=> !prev)} className="justify-center cursor-pointer  sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm  shadow-xl rounded-lg text-white  shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-sm">
     
      <div className="text-center ">
        <h2 className="font-semibold">{user?.username}</h2>
        <p className="text-gray-50">
          Joined:{" "}
          {new Date(user?.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="border-t cursor-pointer" >
     {toggleDropdown &&(   <button
          onClick={handleLogout}
          className="w-1/2 block  rounded-full bg-[#04011427] hover:bg-[#f30f1417]  hover:shadow-lg text-white px-10 py-4 text-base hover:text-lg shadow-lg shadow-[#2A0E61]/50  backdrop-blur-md"
        >
          Log Out
        </button>)}
      </div>
    </div>
  ) : (<Link href="/log-in" className="ml-2 mt-1 font-bold border border-slate-400 border-spacing-6 rounded-lg p-4 text-center text-slate-100 max-[480px]:text-lime-800 max-[480px]:from-neutral-700 max-[480px]:text-base min-[380px]:md:text-lime-500"><FaAngleDoubleDown className="text-2xl animate-bounce"/>{t('Signin')}</Link>)
}

    

      
        
</div>
}
