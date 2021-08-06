import React from 'react'
import { Link } from "react-router-dom";
import Search from '../Search';


function Navbarfillm() {
    return (
        <div>
            <div className="Menu-Moveis">
                <div className="nav-menu">
                    <ul className="But-Movies ">
                        <li className="li-nav"><Link to="/fillm" className="Menu-But">FILLM</Link></li>
                        <li className="li-nav"><Link to="/NewFillm" className="Menu-But">NEWFILLM</Link></li>
                    </ul>
             <Search/>
             </div>
            </div>
        </div>
    )
}

export default Navbarfillm
