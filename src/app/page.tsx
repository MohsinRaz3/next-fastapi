"use client"
import Todos from "@/components/Todos";
import { useEffect, useState } from "react";

export default function Home() {
  const [homeValue, setHomeValue] = useState<{"message": string}>()

  useEffect(()=>{ 
const getData = async()=>{
  const response = await fetch("https://fastapi-sqlmodel-1.onrender.com/")
  const res = await response.json()
 // console.log(res);
  setHomeValue(res)
  return res

}
getData()
  },[])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pr-8 md:pr-0 py-8 px-24">
     <div>
      <h1 className="text-white text-3xl py-3 font-bold flex justify-center item-center">
        {homeValue?.message}
      </h1>
<Todos/>
     </div>
    </main>
  );
}
