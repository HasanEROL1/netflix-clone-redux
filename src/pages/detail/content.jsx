import React from 'react'
import List from './list'
import millify from 'millify'

const Content = ({ movie }) => {
    return (
        <div className='my-10 grid md:grid-cols-2 gap-5 md:gap-10'>
            <div>
                <List title="Kategoriler" arr={movie.genres} />
                <List title="Konuşulan Diller" arr={movie.spoken_languages} />
                <List title="Yapımcı Şirketler" arr={movie.production_companies} />
                <List title="Yapımcı Ülkeler" arr={movie.production_countries} />
            </div>

            <section className='flex flex-col gap-5'>
                <section>
                    <p className="text-sm leading-relaxed text-zinc-300">
                        {movie.overview}
                    </p>
                    <div className='flex justify-center mt-2'>
                        <span className="text-yellow-400 font-semibold text-xl-center">IMDB:</span>
                        <span className="ml-2 font-extrabold text-gray-400 drop-shadow-sm text-md">
                            {movie.vote_average.toFixed(2)}
                        </span>
                    </div>
                </section>

                <section className="flex flex-col gap-2 items-center text-center mt-10">
                    <p>
                        <span>Bütçe: </span>
                        <span className='text-green-500 font-semibold'>
                            {movie.budget === 0 ? "Bilinmiyor" : "$" + millify(movie.budget)}
                        </span>
                    </p>
                    <p>
                        <span>Hasılat: </span>
                        <span className='text-green-500 font-semibold'>
                            {movie.revenue === 0 ? "Bilinmiyor" : "$" + millify(movie.revenue)}
                        </span>
                    </p>
                </section>
            </section>


        </div>
    )
}

export default Content