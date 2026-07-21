import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/blog' element={<Blog/>}/>
  </Routes>   
    </>
  )
}

export default App
