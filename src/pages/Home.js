import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'
import '../styles/Home.css'
import WeatherDisplay from '../components/Weather'

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my Name is Aiden </h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
        <LinkedIn/>
        <Email/>
        <GitHub/>
        </div>
      </div>
      <div className='weatherApi'>
        <WeatherDisplay />
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span> 
              ReactJS, HTML, CSS, JavaScript, React Native, NPM, BootStrap, MaterialUI, StyledComponents
              </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>JavaScript, Python, </span>
            </li>
        </ol>
      </div>
    </div>
  )
}