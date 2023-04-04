import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import '../styles/NavBar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { useState } from 'react'
import { useEffect } from 'react'

export default function NavBar() {
    // State for navbar
    const [expandNavbar, setExpandNavbar] = useState(false)

    const location = useLocation();
// sets the expanded navbar to false (closed) whenever the location is changed
    useEffect(() => {
        setExpandNavbar(false)
    },[location])
  return (
    <div className='navbar' id={expandNavbar ? "open": "close"}>
        <div className='toggleButton'>
            {/* button that changes the navbar from either close or open depending on the previous state of the navbar*/}
            <button onClick={() => {
                setExpandNavbar((prev) => !prev)
            }}> <ReorderIcon/> </button>
        </div>
        <div className='Links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
        </div>
    </div>
  )
}