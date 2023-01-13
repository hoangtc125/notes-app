import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Container } from '@mui/system'

import './index.css'
import router from './routers'
import './firebase/config'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{ textAlign: "center", marginTop: "50px"}}>
      <RouterProvider router={router}/>
    </Container>
  </React.StrictMode>
)
