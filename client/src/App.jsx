import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Post" element={<CreatePost/>} />

 </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
