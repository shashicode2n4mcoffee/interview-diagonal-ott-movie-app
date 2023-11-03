import '../Styles/dashboard.css'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../Components/SearchBar'
import MovieList from '../Components/MovieList'
import { fetchMoviesRequest } from '../Redux/actions/moviesActions'

const Dashboard = ({ fetchMoviesRequest, data, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [movieList, setMovieList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (searchTerm) {
      const filteredMovies = movieList.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm?.toLowerCase())
      )
      setMovieList(filteredMovies)
    } else {
      setMovieList(data?.page?.['content-items']?.content)
    }
  }, [data, searchTerm])

  useEffect(() => {
    const movieDetails = {
      url: `/data/page${currentPage}.json`,
    }
    fetchMoviesRequest(movieDetails)
  }, [currentPage])

  console.log('oncsearch', searchTerm)
  return (
    <div className='dashboard-container'>
      <div className='search-bar'>
        <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />
      </div>
      <div className='movie-list'>
        <MovieList
          movies={movieList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={data?.page?.['total-content-items'] || 0}
          className='movie-list'
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.movies.data,
  loading: state.movies.loading,
  error: state.movies.error,
})

const mapDispatchToProps = {
  fetchMoviesRequest: fetchMoviesRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
