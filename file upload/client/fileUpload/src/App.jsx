import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const handleForm = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    console.log(data);
    axios.post(`http://localhost:5000/user/add`, data)
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);
        
      })
  }
  return (
    <>
      <form action="" onSubmit={handleForm}>
        <div>
          UserName:
          <input type="text" name="userName" id="" />
        </div>

        <div>
          UserEmail:
          <input type="text" name="userEmail" id="" />
        </div>
        <div>
          Upload File:
          <input type="file" name="categoryImage" id="" />
        </div>

        <div>

          <input type="submit" name="" id="" />
        </div>
      </form>
    </>
  )
}

export default App
