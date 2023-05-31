import React from 'react'
import Results from '@/Components/results';

export default async function searchPage({params}){
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=284846583c7036aa8062346cf8f5aa80&query=${params.searchTerm}&language=en-US&include_adult=false`);

    // console.log(res)
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
    
      const data = await res.json();

      const results = data.results;

  return (
    <div>
    {results && results.length === 0 && (
        <h1 className="pt-6 text-center">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  )
}
