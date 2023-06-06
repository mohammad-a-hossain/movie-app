
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })


'use client';
 
//import { Suspense } from 'react';

import Header from "@/Components/Header"
import Providers from '../app/Providers'
import Navbar from "@/Components/Navbar";
import SearchBar from '@/Components/SearchBar'
import CarouselPage from "@/Components/Carousel";
import './globals.css'
import Genrepage from "@/Components/GenryComp";


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

      {/*slider*/}

     {/*  <CarouselPage /> */}
     
      <Navbar />
      <Genrepage/>
     <SearchBar/>
     
      {/* search bar */}
      {children}
  

      </Providers>
     
      </body>
    </html>
  )
}
