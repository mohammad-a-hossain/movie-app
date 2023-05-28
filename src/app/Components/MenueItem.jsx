'use client'

import Link from 'next/link'
import { FaBeer } from 'react-icons/fa';
 //import  AiOutlindeHome  from 'react-icons/fa' 
 // AiOutlineHome



export default function MenueItem({title, address,Icon}) {
  return (
    <div>

    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600 ">
   
      
    <p className="hidden my-2 text-sm sm:inline">{title}</p>
    </Link>
  
    </div>
  )
}
