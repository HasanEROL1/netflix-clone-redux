import React, { useEffect, useState } from "react"
import Hero from './Hero';
import api from "../../utils/api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import MovieList from "./MovieList";

const Home = () => {

    const [genres, setGenres] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        api
            .get("/genre/movie/list?language=tr")
            .then((res) => setGenres(res.data.genres))
            .catch((err) => setError(err.message))

    }, [])


    return (
        <div><Hero />
            {error ? (
                <Error info={error} />
            ) : !genres ? (
                <Loader />
            ) : (
                <div>
                    {genres.map((genre) => (
                        <MovieList key={genre.id} genre={genre} />
                    ))} </div>
            )
            }
        </div>
    )
}

export default Home