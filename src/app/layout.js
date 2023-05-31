
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })


'use client';
 
//import { Suspense } from 'react';

import Header from "@/Components/Header"
import Providers from '../app/Providers'
import Navbar from "@/Components/Navbar";
import SearchBar from '@/Components/SearchBar'
import './globals.css'


export const metadata = {
  title: 'movie app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     
    <Providers>
  
      {/* header */}
      <Header/>
      {/* navbar */}
     
      <Navbar />
     <SearchBar/>
     
      {/* search bar */}
      {children}
  

      </Providers>
     
      </body>
    </html>
  )
}
