import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/api'
import Content from './content';
import Banner from './banner';
import Buttons from './buttons';
import Actors from './actors';
import Trailers from './trailers';
import Error from './../../components/error/index';
import Loader from '../../components/loader';

const Detail = () => {
    const [error, setError] = useState(null)
    const [movie, setMovie] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const params = {
            append_to_response: "credits,videos",
            language: "tr"
        }


        api
            .get(`/movie/${id}`, { params })
            .then((res) => setMovie(res.data))
            .catch((err) => setError(err.message))
    }, [])

    if (error) return <Error info={error} />
    if (!movie) return <Loader />
    return (
        <>
            <Buttons movie={movie} />
            <Banner movie={movie} />
            <Content movie={movie} />
            <Actors cast={movie.credits.cast} />
            <Trailers videos={movie.videos.results} />
        </>
    )
}

export default Detail