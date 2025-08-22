'use client'

import { useState } from "react";

const Counter = () => {

const [count,setCount ]=  useState(0 )

const increment= ()=>{

setCount((pre)=>prev+1)
}
const decreasment =()=>{
setCount((pre)=>prev-1)
}

  return (
    <>
    <div className="bg-black w-full h-screen">

    <div className="flex justify-center items-center gap-3 ">
        <button onClick={decreasment} className="px-4 text-black font-bold bg-white"> -</button>
        <button className=" px-4 text-black font-bold  bg-white">{count}</button>
        <button onClick={increment} className="px-4 text-black font-bold bg-white">+</button>

    </div>


    </div>

    </>
  );
};

export default Counter;
