
"use client"; 

import MenueItem  from "./MenueItem"
import DarkSwitch from "./DarkSwitch"
import Link from "next/link"

export default function Header() {
    return (
      <div className='flex items-center justify-between max-w-6xl py-6 mx-2 sm:mx-auto dark:bg-slate-700 bg-slate-200'>
          <div className='flex'>
           <MenueItem title="HOME" address="/"  classNmae='...'  />
           <MenueItem title="ABOUT" address="/about" className='...' />
         
        </div>
            <div className="flex items-center space-x-5">
            <DarkSwitch/>
          <Link href="/">
            <h2 className="text-2xl dark:text-white text-slate-900">
          
              <span className="px-2 py-1 mr-1 font-bold rounded-lg">
                Movie apps
              </span>
             
            </h2>
          </Link>
        </div>
        
         
      </div>
    )
  }
  