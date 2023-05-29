'use client';
import React,{useEffect} from 'react'

export default function Error({error, reset}){

  useEffect(()=>{
    console.log(error)
  },[error])
  return (
    <div>
   <h3> something went wrong  </h3>
   <button onClick={()=> reset()}>try again</button>
    </div>
  )
}
