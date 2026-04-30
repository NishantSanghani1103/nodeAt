import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/AppRoutes'
import AppProvider from './routes/AppProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppProvider>
        <RouterProvider router={routes} />
      </AppProvider>
    </>
  )
}

export default App
