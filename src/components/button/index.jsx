import React from 'react'
import { BsBookmarkPlusFill } from 'react-icons/bs'
import { GoBookmarkSlashFill } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMovieList } from '../../redux/actions/listActions'
import Error from '../error'

const Button = ({ movie }) => {

    const dispatch = useDispatch()
    const list = useSelector((store) => store.list)
    const error = useSelector((store) => store.error)
    if (!movie) return null
    if (error) return <Error info={error} />
    // ekrana basılan film izleme listesinde var mı?
    const isAdded = list.find((item) => item.id === movie.id)

    // film listede varsa çıkar yoksa ekle
    const handleClick = () => {
        dispatch(toggleMovieList(movie, !isAdded));
    }
    return (
        <button onClick={handleClick}
            className='hero-btn bg-blue-600 rounded hover:bg-blue-700'>
            {isAdded ? (
                <>
                    <GoBookmarkSlashFill />
                    Listeden Kaldır
                </>) : (

                <>
                    <BsBookmarkPlusFill />
                    Listeye Ekle
                </>
            )}
        </button>

    )
}







export default Button