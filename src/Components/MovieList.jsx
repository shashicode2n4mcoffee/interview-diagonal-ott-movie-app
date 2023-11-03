// MovieList.jsx
import React, { useState } from 'react'
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material'
import { Pagination } from '@mui/material'
import api from '../Api'

const MovieList = ({ movies, currentPage, setCurrentPage, totalPages }) => {
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <div>
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
              <CardContent sx={{ backgroundColor: 'black' }}>
                <Typography variant='h5' sx={{ color: 'white' }}>
                  {movie.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
        color='primary'
        sx={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          '& .MuiPaginationItem-root': {
            color: 'white',
          },
          '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#1976D2',
          },
        }}
      />
    </div>
  )
}

export default MovieList
