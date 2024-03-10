import React from "react"; 
import MemeImages from "./MemeImage";
import { useState } from "react";



function App() {
  const [source,setSource]=useState("")
      const [upperText,setUpperText]=useState("")
      const [lowerText,setLowerText]=useState("")
      return (<div className="flex flex-col items-center gap-y-10">
            <h1 className="text-3xl">Meme Generator</h1>
            <section className="flex flex-col w-[400px] gap-y-10 relative">
                  <input type="text" placeholder="set upper text" onChange={(e)=>setUpperText(e.target.value)} className="border-2 border-black p-3 rounded-md"  />
                  <input type="text" placeholder="set lower text" onChange={(e)=>setLowerText(e.target.value)} className="border-2 border-black p-3  rounded-md"  />

                  <div className="absolute top-[190px] w-[100%] text-3xl text-center   text-red-600 font-bold break-words ">{upperText}</div>
                  <div className="border-2 border-green-600 h-[300px]">
                        {source!=="" && <img src={source} alt="source" className="h-[100%] w-[100%]" />}
                  </div>
                  <div className=" absolute bottom-2 w-[100%] text-3xl text-center font-bold text-red-600 break-words ">{lowerText}</div>

            </section>
            <h1 className="text-2xl">Choose images From below:</h1>
            <div className="flex flex-wrap items-center justify-center gap-5">
            {MemeImages.map((item,index)=>{
                  return <div>
                        <img key={index} src={item.image} alt="photography" onClick={()=>setSource(item.image)} className="border-2 border-green-500 w-[300px] h-[300px] cursor-pointer hover:shadow-[0_0_10px_black]"/>
                  </div>
            })}
            </div>
      </div>
      )

}

export default App;
