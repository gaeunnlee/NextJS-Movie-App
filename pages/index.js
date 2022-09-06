import { useEffect, useState } from "react"
import Seo from "../components/Seo";

const API_KEY = "a82ffdd3600a2812df822bf07033a3e0"

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async() => {
      const { results } = await(await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )).json();
      setMovies(results);
      console.log(results);
    })()
  },[])
  return (
    <div id="movie_content">
      <Seo title="Home" />
      {movies.length <= 0 && <h4>Loading...</h4>}
      {movies?.map(movie => <div className="movie" key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
        <h4>{movie.original_title}</h4>
        <p>{movie.overview}</p>
      </div>)}
      <style jsx>{`
        #movie_content {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1vw;
        }
        .movie {
          width: 30vw;
        }
        img {width: 30vw}
      `}</style>
    </div>
  )
}
