import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../types'

const initialState = {
  loading: false,
  data: [],
  error: null,
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default moviesReducer
