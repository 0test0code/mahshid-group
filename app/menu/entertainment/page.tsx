"use client";
//import Image from "next/image";
import Link from "next/link";
import { game_data } from "./constants/info";
import GalleryDataProvider from "./sub/galleryDataProvider";
import { useRouter } from "next/navigation";


const Entertainment = () => {const router = useRouter();
  return (
   
<section className="bg-gray-900 h-screen flex-col justify-center items-center gap-x-16 text-lime-300 "
 >
  
  {game_data.map((game, index)=>(
    
  <div className="flex flex-col py-3 bg-gray-900 items-center "> 
    <div className="flex flex-wrap w-[300px] h-[420px] bg-transparent cursor-pointer group perspective m-auto mt-3.5 my-24">
    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
      <div className="absolute backface-hidden border-2  w-full h-full"> 
      <GalleryDataProvider
       
              key={game.index+1}
              width={game.width}
              height={game.height}
              src={game.Image} index={index+1}           
                   />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden border-2 w-full h-full bg-gray-100">
               <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                       <h1 className="text-3xl font-semibold">{game.title}</h1>
                       <p className="mt-2">{game.Description}</p>
                        <button  onClick={(e)=>router.push(game.path)} className="bg-teal-500 px-6 py-3 font-semibold text-white rounded-full
                             absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20">
                           Play Now </button>
            
                  </div>
            </div>
    </div>
  </div>
 </div>

  ))}
</section>
      
    
  )
}

export default Entertainment
