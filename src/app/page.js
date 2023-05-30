
 const API_KEY=`284846583c7036aa8062346cf8f5aa80`

 //import {Results }from '@/Components/Results'
import Results from '@/Components/Results';

export default async function Home({searchParams}){



  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,{ next: { revalidate: 10000 } });

  const data = await res.json();

  const results = data.results;

 // console.log(results)

  return (
    <main>
     <Results results={results}/>
     
    
    </main>
  )
}
