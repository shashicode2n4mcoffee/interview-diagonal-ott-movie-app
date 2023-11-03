import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../types'

export const fetchMoviesRequest = (data) => ({
  type: FETCH_MOVIES_REQUEST,
  payload: data,
})

export const fetchMoviesSuccess = (data) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: data,
})

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
})
