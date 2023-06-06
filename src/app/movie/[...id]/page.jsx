import Image from "next/image";


async function getMovie(movieId){

    const res= await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=284846583c7036aa8062346cf8f5aa80`)
    return await res.json()

}
// async function getGenry(){

//   const res= await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=284846583c7036aa8062346cf8f5aa80`)
//   return await res.json()

// }


// async function imagesMov(){
//   const res= await fetch(`https://api.themoviedb.org/3/tv/series_id/season/season_number/episode/episode_number/images`)
//  return await res.json()
// }eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODQ4NDY1ODNjNzAzNmFhODA2MjM0NmNmOGY1YWE4MCIsInN1YiI6IjY0NzQ1NGViYmUyZDQ5MDBkY2RiN2IxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nVwjJk1Iqdzh2_3CgB4AdQXidQpNmzIyHHNJQlHPMNs


//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODQ4NDY1ODNjNzAzNmFhODA2MjM0NmNmOGY1YWE4MCIsInN1YiI6IjY0NzQ1NGViYmUyZDQ5MDBkY2RiN2IxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nVwjJk1Iqdzh2_3CgB4AdQXidQpNmzIyHHNJQlHPMNs

export default async function MoviePage({params}){

    const movieId= params.id
    const movie = await getMovie(movieId)

   // const genr= await getGenry()
   //  console.log(genr)
    return(
       
        <div className="w-full">
        
        
      <div className="flex flex-col items-center content-center max-w-6xl p-4 mx-auto md:pt-8 md:flex-row md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>
        <div className="p-2">
          <h2 className="mb-3 text-lg font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3 text-lg">
            <span className="mr-1 font-semibold">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
  
    </div>
       
    )
}