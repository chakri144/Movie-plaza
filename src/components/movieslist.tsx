import React, { useEffect, useState } from 'react'
import MovieNavBar from './MovieNavBar'
import axios from 'axios';

interface ApiMovie{
    Title:string,
    Year:string,
    Runtime:string,
    Poster:string
}


export default function MoviesList() {
const [moviesDataList ,setMoviesDataList] = useState<ApiMovie[]>([]);
useEffect(
    ()=>{
        axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
        .then(res=>setMoviesDataList(res.data));
    }
);



  return (
    <div>
        <MovieNavBar />
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Poster</th>
      <th scope="col">Title</th>
      <th scope="col">Year</th>
      <th scope="col">Runtime</th>
    </tr>
  </thead>
  <tbody>
    {moviesDataList.map(
        eachMovie =>(
                <tr>
                    <td>
                        <img width="250px" height="250px" src={eachMovie.Poster} />
                    </td>
                    <td>{eachMovie.Title}</td>
                    <td>{eachMovie.Year}</td>
                    <td>{eachMovie.Runtime}</td>
                </tr>
        )
    )}
    
    
  </tbody>
</table>
        
        
        </div>
  )
}