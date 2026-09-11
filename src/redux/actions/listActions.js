import ActionTypes from './../actionTypes';
import api from './../../utils/api';

const account_id = "21634942"

const MIN_LOADING_TIME = 800

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

export const getWatchList = () => async (dispatch) => {
    const loadingStartedAt = Date.now()
    dispatch({ type: ActionTypes.LIST_LOADING })

    try {
        const res = await api.get(`/account/${account_id}/watchlist/movies`)
        const elapsedTime = Date.now() - loadingStartedAt
        if (elapsedTime < MIN_LOADING_TIME) {
            await delay(MIN_LOADING_TIME - elapsedTime)
        }
        dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    } catch (err) {
        const elapsedTime = Date.now() - loadingStartedAt
        if (elapsedTime < MIN_LOADING_TIME) {
            await delay(MIN_LOADING_TIME - elapsedTime)
        }
        dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    }
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
        .catch((err) => {
            dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
        })

}
