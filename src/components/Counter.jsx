'use client'

import { useState } from "react";

const Counter = () => {

const [count,setCount ]=  useState(0 )

const increment= ()=>{

setCount((prev)=>prev+1)
}
const decreasment =()=>{
setCount((prev)=>prev-1)
}

  return (
    <>
    <div className="bg-black w-full  h-screen  ">
   
   
    <div  className="flex flex-col item-center h-screen justify-center  gap-10 ">
    <h1 className="text-white text-center">Counter Vishvajeet shukla</h1>

    <div  className="flex justify-center items-center  ">
        <button onClick={decreasment} className="px-4  text-black font-bold bg-white"> -</button>
        <button className=" px-4 text-black font-bold  transition-all duration-200   bg-white">{count}</button>
        <button onClick={increment} className="px-4 text-black font-bold bg-white">+</button>
</div>
    </div>


    </div>

    </>
  );
};

export default Counter;
