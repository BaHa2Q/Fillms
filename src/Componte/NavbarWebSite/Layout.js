import React, { useState , useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../css/layout.css'
import "../css/Menu.css"
import { Link } from "react-router-dom";



function Layout() {
    const [showBtn, setShowBtn] = useState(true)
    const location = useLocation()
    useEffect(() =>  {
        location.pathname !== "/"? setShowBtn(false) : setShowBtn(true)
    },[location.pathname])
    return (
        <div className="navbar"  style={{display: "none"}}>
            <div className="nav">
                 <Link to="/" className="Hub But">Hub</Link>
                 {showBtn && (<><Link to="/newfillm"  className="newfillm But">NEWFILLM</Link><Link to="/fillm"  className="fillm But">FILLM</Link></>) }
                 
            </div>
        </div>
    )
}

export default Layout
