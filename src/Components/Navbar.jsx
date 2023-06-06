import NavbarItem from "./NavbarItem";
//import genries from '../lib/index'

//import Genrepage from "./genryComp";
/* 
async function getGenry(){

  const res= await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=284846583c7036aa8062346cf8f5aa80`)
  return await res.json

} */



export default  function Navbar() {
 

  return (
    <div className="flex justify-center p-4 dark:bg-gray-600 bg-amber-100 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      <NavbarItem title="Favourate" param="fetchFeveourate" />
     

      
    </div>
  )
  }