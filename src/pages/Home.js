import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'
import '../styles/Home.css'
import WeatherDisplay from '../components/Weather'
import { Type } from '../components/Type'
import { Techstacks } from '../components/Skills'

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className='type'>
          <Type/>
          </div>
        <div className="prompt">
          <p>A Hardworking Software Engineer with a strong desire to learn and improve best practices.</p>
        <LinkedIn/>
        <Email/>
        <GitHub/>
        </div>
      </div>
      <div className='weatherApi'>
        <WeatherDisplay />
      </div>
      <div className="skills">

        <Techstacks/>
      </div>
    </div>
  )
}