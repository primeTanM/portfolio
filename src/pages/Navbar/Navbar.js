import React from 'react'
import './Navbar.css'
import { useEffect } from 'react';
import { useNavigate, Link, Route, useLocation } from 'react-router-dom';




const Navbar = () => {
  const currentPage = useLocation();
  const string = (currentPage.pathname).substring(1)
  const header = string.charAt(0).toUpperCase() + string.substring(1)
  let toDisplay
  if(currentPage.pathname === '/'){
    toDisplay = <div className='name'>
                  <h1>Tanmay Mishra</h1>
                  <p>Software Engineer</p>
                </div>
  }
  else {
    toDisplay = <div className='name'>
                  <h1 className='page-header'>{header}</h1>
                </div>
  }

  return (
    <div style={{
      height: '200px',  
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center',
      position: 'fixed',
      padding: '10px 15px' ,
      fontFamily: "'Poppins', sans-serif",
      color: 'rgb(228, 237, 247)',
    }}>
      
      {toDisplay}

      <div className='nav-icons'>
        <Link style={{textDecoration: 'None'}} to="/"><p>Home</p></Link>
        <Link style={{textDecoration: 'None'}} to="about"><p>About</p></Link>
        <Link style={{textDecoration: 'None'}} to="/projects"><p>Projects</p></Link>
        <Link style={{textDecoration: 'None'}} to="/blogs"><p>Blogs</p></Link>
        <Link style={{textDecoration: 'None'}} to="/contact"><p>Contact</p></Link>
        
      </div>
    </div>
  )
}

export default Navbar