import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, createTheme } from '@mui/material'
import { Provider } from 'react-redux'
import store from './Redux/store/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontSize: 14,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        limit={1}
      />
    </ThemeProvider>
  </Provider>
)

reportWebVitals()
