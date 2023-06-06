import { useState } from "react";

let genries = {
	"genres": [
		{
			"id": 28,
			"name": "Action"
		},
		{
			"id": 12,
			"name": "Adventure"
		},
		{
			"id": 16,
			"name": "Animation"
		},
		{
			"id": 35,
			"name": "Comedy"
		},
		{
			"id": 80,
			"name": "Crime"
		},
		{
			"id": 99,
			"name": "Documentary"
		},
		{
			"id": 18,
			"name": "Drama"
		},
		{
			"id": 10751,
			"name": "Family"
		},
		{
			"id": 14,
			"name": "Fantasy"
		},
		{
			"id": 36,
			"name": "History"
		},
		{
			"id": 27,
			"name": "Horror"
		},
		{
			"id": 10402,
			"name": "Music"
		},
		{
			"id": 9648,
			"name": "Mystery"
		},
		{
			"id": 10749,
			"name": "Romance"
		},
		{
			"id": 878,
			"name": "Science Fiction"
		},
		{
			"id": 10770,
			"name": "TV Movie"
		},
		{
			"id": 53,
			"name": "Thriller"
		},
		{
			"id": 10752,
			"name": "War"
		},
		{
			"id": 37,
			"name": "Western"
		}
	]
}




export default function Genrepage() {
    // const genries =  getGenry()
  const [genry,setGenry] = useState([genries.genres])
  // const genry= genries([])
   console.log(genry)

    return(
        <div className='flex justify-center max-w-6xl px-5 py-6 mx-2 my-2 sm:mx-auto dark:bg-slate-700 bg-slate-200'>
         
          
            {
                genry[0].map((gen,index) =>(
                <li className='flex-row flex-wrap p-1 list-none justify-items-center' key={index}>
                <a className='bg-slate-500 text-slate-50 hover:bg-violet-600'>{gen.name}</a> </li>
               
             ))
            }
     
            </div>
    )
}