import React from 'react'
import './Connect.css'
import { BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import { FaDev } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'



const Connect = () => {
  return (
    <div className='connect' style={{
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
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className='connect-text'>
        <h1>Let's <span style={{ color: '#de9295'}}>create</span> something great !</h1>
        <p>Or not.If you are someone who likes FRIENDS, Attack on Titan, loves playing Table Tennis and Rocket League, or gets lost in space
          from time to time, or just want to chat, get in touch in me. I am sure we will have a great experience. </p>

        <div className='social-icons'>
          <a className='linkedin' href="https://www.linkedin.com/in/tanmay-misra/" target="_blank"><BsLinkedin /></a>
          <a className='github' href="https://github.com/primeTanM" target="_blank"><BsGithub /></a>
          <a className='insta' href="https://www.instagram.com/tanmay.m19/" target="_blank"><BsInstagram /></a>
          <a className='dev' href="https://dev.to/primetanm" target="_blank"><FaDev /></a>
          <a className='mail' href="mailto:tanmaymisra619@gmail.com" target="_blank"><AiFillMail /></a>
        </div>

      </div>

      
    </div>
  )
}

export default Connect