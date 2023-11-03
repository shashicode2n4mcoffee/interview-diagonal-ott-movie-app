import React, { useState } from 'react'
import { TextField, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

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
    <div>
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
      />
    </div>
  )
}

export default SearchBar
