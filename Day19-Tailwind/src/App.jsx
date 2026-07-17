import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-amber-300 text-center font-bold font-serif text-8xl'>Hello Krishna!</h1>

      <div className="border-2 shadow-2xl p-4 rounded-lg m-10 w-90 h-90 ">
        <div>
          <img src='https://www.mindrisers.com.np/static/Images/courses/Data-Science.png' alt='Mindrisers' width={300}></img>
          <h2 className='text-4xl font-bold' >Data Science and python training with AI</h2>
          <p className='font-bold'>3 Months</p>
          <button className='bg-green-600  rounded-lg'>See More -{'>'}</button>

        </div>

      </div>

      <div className="border-2 shadow-2xl p-4 rounded-lg m-10 w-90 h-90 ">
        <div>
          <img src='https://www.mindrisers.com.np/static/Images/courses/Data-Science.png' alt='Mindrisers' width={300}></img>
          <h2 className='text-4xl font-bold' >Data Science and python training with AI</h2>
          <p className='font-bold'>3 Months</p>
          <button className='bg-green-600 rounded-lg'>See More -{'>'}</button>

        </div>

      </div>

      <div className="border-2 shadow-2xl p-4 rounded-lg m-10 w-90 h-90">
        <div>
          <img src='https://www.mindrisers.com.np/static/Images/courses/Data-Science.png' alt='Mindrisers' width={300}></img>
          <h2 className='text-4xl font-bold' >Data Science and python training with AI</h2>
          <p className='font-bold'>3 Months</p>
          <button className='bg-green-600  rounded-lg'>See More -{'>'}</button>

        </div>

      </div>

      <div className="border-2 shadow-2xl p-4 rounded-lg m-10 w-90 h-90 ">
        <div>
          <img src='https://www.mindrisers.com.np/static/Images/courses/Data-Science.png' alt='Mindrisers' width={300}></img>
          <h2 className='text-4xl font-bold' >Data Science and python training with AI</h2>
          <p className='font-bold'>3 Months</p>
          <button className='bg-green-600 rounded-lg'>See More -{'>'}</button>

        </div>

      </div>

      <div className="border-2 shadow-2xl p-4 rounded-lg m-10 w-90 h-90">
        <div>
          <img src='https://www.mindrisers.com.np/static/Images/courses/Data-Science.png' alt='Mindrisers' width={300}></img>
          <h2 className='text-4xl font-bold' >Data Science and python training with AI</h2>
          <p className='font-bold'>3 Months</p>
          <button className='bg-green-600 rounded-lg'>See More -{'>'}</button>

        </div>

      </div>
    </>
  )
}

export default App
