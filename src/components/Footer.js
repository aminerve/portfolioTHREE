import { GitHub, LinkedIn } from '@material-ui/icons'
import "../styles/Footer.css"
import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <GitHub/>
            <LinkedIn/>
        </div>
        <p> &copy; 2023 aidenminerve.com</p>
    </div>
  )
}