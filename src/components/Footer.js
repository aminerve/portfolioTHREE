import { GitHub, LinkedIn } from '@material-ui/icons'
import "../styles/Footer.css"
import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a href='https://github.com/aminerve' target='_blank' rel="noopener noreferrer"><GitHub/></a>
          <a href='https://www.linkedin.com/in/aiden-minerve-567085266/' target='_blank'rel="noopener noreferrer"><LinkedIn/></a>
            
            
        </div>
        <p> &copy; 2023 aidenminerve.com</p>
    </div>
  )
}