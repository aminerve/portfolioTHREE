import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'
import '../styles/Home.css'
import WeatherDisplay from '../components/Weather'
import { Type } from '../components/Type'
import { Skills } from '../components/Skills'

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className='type'>
          <Type/>
          </div>
        <div className="prompt">
          <p>A Hardworking Software Engineer with a strong desire to learn and improve best practices.</p>
          <a href='https://www.linkedin.com/in/aiden-minerve-567085266/' target='_blank' rel="noopener noreferrer"><LinkedIn/></a>
          <a href='https://github.com/aminerve' target='_blank' rel="noopener noreferrer"><GitHub/></a>
          <a href='mailto:aidenminerve@gmail.com' target='_blank' rel="noopener noreferrer"><Email/></a>
        
        </div>
      </div>
      <div className='weatherApi'>
        <WeatherDisplay />
      </div>
      <div className="skills">

        <Skills/>
      </div>
    </div>
  )
}