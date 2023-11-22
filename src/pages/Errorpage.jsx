import React from 'react'
import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <div className='flex flex-col items-center h-5/6 justify-center'>
    <p className="text-6xl">404</p>
    <p className="text-3xl">Something went wrong</p>
    <Link to="/" className="text-2xl underline decoration-solid decoration-sky-500">Go back to home</Link>
  </div>
  )
}

export default Errorpage