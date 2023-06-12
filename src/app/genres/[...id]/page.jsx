'use client'

import React from 'react'
import Results from '@/Components/Results'

export default async function GenryPage({params}){
    //console.log('id', params.toNum())
     const res = await  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=284846583c7036aa8062346cf8f5aa80&language=en-US&page=1&with_genres=${params.id}`);

     //console.log(res)
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
    
      const data = await res.json();

      const results = data.results;


    
    // console.log(results)

  return (
    <div>
    {results && results.length === 0 && (
        <h1 className="pt-6 text-center">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  )
}
