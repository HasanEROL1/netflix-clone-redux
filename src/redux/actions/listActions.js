import ActionTypes from './../actionTypes';
import api from './../../utils/api';

const account_id = "21634942"
export const getWatchList = () => async (dispatch) => {
    dispatch({ type: ActionTypes.LIST_LOADING })

    api
        .get(`/account/${account_id}/watchlist/movies`)
        .then((res) =>
            dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
        )
        .catch((err) =>
            dispatch({ type: ActionTypes.ActionTypes.LIST_ERROR, payload: err.message })
        )
}

//Film listede varsa kaldıran yoksa ekleyen asenkron thunk fonksiyonu

export const toggleMovieList = (movie, isAdd) => async (dispatch) => {
    // body içeriğini hazırla
    const body = {
        media_type: "movie",
        media_id: movie.id,
        watchlist: isAdd
    }

    api
        .post(`/account/${account_id}/watchlist`, body)
        .then(() => {
            isAdd
                ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
                : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie })
        })
        .catch((err) => console.log(err))

}
