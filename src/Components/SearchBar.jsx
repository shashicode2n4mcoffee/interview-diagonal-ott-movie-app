import React, { useState } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({ onSearch, searchTerm }) => {
  const [showBackButton, setShowBackButton] = useState(false)
  const handleSearchChange = (event) => {
    onSearch(event.target.value)
    setShowBackButton(true)
  }

  const onBackClick = () => {
    onSearch('')
    setShowBackButton(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {showBackButton && (
        <IconButton onClick={onBackClick}>
          <ArrowBackIcon style={{ color: 'white' }} />
        </IconButton>
      )}
      <TextField
        fullWidth
        label='Search Movies'
        variant='outlined'
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          flex: 1,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '& .MuiOutlinedInput-input': {
            color: 'white',
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon style={{ color: 'white' }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}

export default SearchBar
