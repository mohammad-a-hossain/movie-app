import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";



export default function Card({result}){
    return(
        <div className="transition-shadow duration-200 rounded-lg cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 group">
        <Link href={`/movie/${result.id}`}>
        <Image
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
        width={500}
        height={300}
        className="transition-opacity duration-200 sm:rounded-t-lg group-hover:opacity-80"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="image is not available"
      >
      </Image>
        <div className='p-2'>
       <p className='line-clamp-2 text-md'> 
        {result.overview}
       </p>
       <h3 className='text-lg truncate'>Title: {result.title || result.name}</h3>

       <div className='flex justify-between'>
         <p className='text-lg font-bold truncate'>
          {result.release_date || result.first_air_date}
          </p>
         <p className='justify-center'>
          <FiThumbsUp/> {result.vote_count}</p> 
       </div>
     
        </div>
        
        </Link>
        
        
        </div>
    )
}