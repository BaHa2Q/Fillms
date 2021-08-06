import React  from 'react';
import './css/top_fillm.css';
import { Movies } from './data.json';
import {Link} from 'react-router-dom'

function Topfillm() {
    // const data = Movies.Fillms.filter(data => (data.id ) )[0]
    const Fillms = Movies.Fillms.filter((Fillms) =>{return Fillms.Evaluation })
    const Top = Fillms.map((Top) => Top.Evaluation)
    const max = Math.max(...Top)
    const data = Fillms.filter(data => data.Evaluation === max )
    // console.log(data?.img);
    return (
        <>
        {/* {Top_Fillm.NEW &&<div className="NEW">NEW
        </div>} */}
                <div className="Top-form">
                    <div className="container-top-fillm" >
                        <p className="texttop">Top</p>
                        <div className="Top" >
                            {data.map((Top_Fillm ,index) => 
                            <div className="cover">
                                <Link className="Link-top-fillm" key={index} to={"/About-Fillm/" + Top_Fillm.id }>
                                    <div div class="cards">
                                    <img style={{width:"100px",height:"150px"}} src={Top_Fillm.img} onError={event => event.target.src="http://beepeers.com/assets/images/commerces/default-image.jpg"} alt="Avatar"  className="image-top"/>
                                    </div>
                                </Link>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Topfillm