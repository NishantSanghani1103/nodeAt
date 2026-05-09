import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/AppRoutes'

function App() {
 

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
