import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material'

const MovieList = ({ movies, currentPage, setCurrentPage, totalPages }) => {
  const [hasMore, setHasMore] = React.useState(true)
  const loadMoreData = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    } else {
      setHasMore(false)
    }
  }

  return (
    <InfiniteScroll
      dataLength={movies?.length}
      next={loadMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <Grid container spacing={3}>
        {movies?.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card variant='outlined'>
              <CardMedia
                component='img'
                height='340'
                image={`https://test.create.diagnal.com/images/${movie['poster-image']}`}
                alt={movie.name}
              />
              <CardContent style={{ backgroundColor: 'black' }}>
                <Typography variant='h5' style={{ color: 'white' }}>
                  {movie.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  )
}

export default MovieList
