import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='project-div' style={{
      background: '#201919',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      zIndex: '-1',
      display: 'flex',
      flexDirection: 'column',  
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}>
      <div className='project-panel'>
        <div onClick = {() => (window.open('https://excuser.herokuapp.com/', '_blank')) } className='proj proj-1'></div>
        <div onClick = {() => (window.open('https://github.com/primeTanM/react-moviedb-app', '_blank')) } className='proj proj-2'></div>
        <div onClick = {() => (window.open('https://github.com/primeTanM/FrontEnd-Mentor-Challenges', '_blank')) } className='proj proj-3'></div>
        <div onClick = {() => (window.open('https://github.com/primeTanM/Applied-Machine-Learning-and-Data-Science-2020/tree/main/Project/Twitter%20Sentimental%20Analysis', '_blank')) } className='proj proj-4'></div>
        <div onClick = {() => (window.open('https://pardarshita-d2c87.web.app/', '_blank')) } className='proj proj-5'></div>
      </div>

    </div>
  )
}

export default Projects