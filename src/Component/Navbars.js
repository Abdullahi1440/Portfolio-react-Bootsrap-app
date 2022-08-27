
import React from 'react'
import { Link  } from 'react-router-dom'


export const Navbars = () => {
  return ( 
   
    <div className=''>
<nav class="navbar navbar-expand-lg navbar-dark sticky-top">
  <div class="container">
    <a className="navbar-brand  display-1" href="#" id='home'> <bold className=''>Abdullahi</bold> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-xl">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className ="nav-item">
          <a className="nav-link" href="#">Github </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">project</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">Contact US </a>
        </li>
     
     
      </ul>
 
    </div>
  </div>
</nav>



  </div>
  )
}
