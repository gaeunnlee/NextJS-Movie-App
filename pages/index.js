import { useEffect, useState } from "react"
import Seo from "../components/Seo";

export default function Home({results}) {
  return (
    <div id="movie_content">
      <Seo title="Home" />
      {results?.map(movie => <div className="movie" key={movie.id}>
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
          height: 90vh;
          overflow-y: scroll; 
        }
        .movie {
          width: 30vw;
          margin-top: 20px;
        }
        img {
          width: 100%;
          align-self: stretch;
          border-radius: 10px;
        }
        @media only screen and (max-width: 700px) {
          .movie {
            width: 46vw;
          }
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps(){
  const API_KEY = "a82ffdd3600a2812df822bf07033a3e0"
  const { results } = await(await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
  return {
    props: {
      results
    }
  }
}