import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()   
  function clickHandler() {
      navigate('/asanasCollection')
  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold"> Namaste </h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button onClick={clickHandler} className="btn btn-primary">Get Started</button>
        {/* <Link to={'/asanasCollection'}>  <button className="btn btn-primary">Get Started</button> </Link>  - n
      better use useNavigate */  }
      </div>
    </div>
  </div>
  )
}

export default Home