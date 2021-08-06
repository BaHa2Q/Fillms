import React , {useState}  from 'react'
import './css/Menu.css'
import Topfillm from './Top_fillm';
import Navbarfillm from './NavbarWebSite/Navbar-fillm'
import './css/about.css'

function Menu(props) {

    const [Show, setShow] = useState(false)

    return (
        <>      
        
            <div className="hub">
                <div id="T" className={`Menu${Show ? " Menu-show" : " Menu-hide"}`}>
                    <a  onClick={() => setShow(!Show)} id="show" className={`Close${Show ? " Show-icon":" Hide-icon"}`}>
                        <span class="iconify" data-icon="bi:arrow-right-circle-fill" data-inline="false" />
                    </a>
                </div>
                <div className={`Forms${Show ? " forms-show" : " forms-hide"}`}>
                        <Navbarfillm/>
                        <Topfillm/>
                    <div className="Cover">
                        {props.children} 
                    </div>
                </div>
                </div>
                

       </>
    )
}

export default Menu
