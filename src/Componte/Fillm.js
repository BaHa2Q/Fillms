import React, { useState } from 'react'
import './css/fillms.css' 
import { Link } from "react-router-dom";
import { Movies } from "./data.json"






function Fillm() {

    // const newfillm = Movies.Fillms.filter((newfillm) =>{return newfillm})
    // const news = newfillm.map((Top) => Top.NEW )
    // const T = news !== true
    // const data = newfillm.filter(data => data.NEW === T )
    // console.log(data);
    const data = Movies.Fillms.map(data => data)
    const [state, setstate] = useState("")
    const  [view, setview] = useState(false)
    const datas = Movies.Fillms.map((data) => (data)).filter((datas)=> datas.id === state)
    
    return (
            <>          
            {/* <div className="container" > 
            {Movies.Fillms.map((Fillm, index) => 
                <div className="container-fillm" key={index}> 
                     <Link className="Link" to={"/About-Fillm/" + Fillm.id }>
                        <div className="img">
                            {Fillm.NEW && <div className="NEW">New</div>}
                        <img src={Fillm.img} onError={event => event.target.src="http://beepeers.com/assets/images/commerces/default-image.jpg"} alt="Avatar"  className="image"/>
                        </div>
                    </Link> 
                    </div>
                    )}
            </div> */}

        {view && <div id="myModal" className="modal">


            {datas.map(data =>(
            <>
<div id="container">	
	
	<div class="product-details">
	<h1>{data.Name}</h1>
	<span class="hint-star star">
    <button class="close" onClick={()=> setview(false)}>&times;</button>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star-o" aria-hidden="true"></i>
	</span>
		
			<p class="information">{data.description}</p>

		
		
<div class="control">
<Link className="Link" to={"/About-Fillm/" + data.id }>
	<button class="btn" >
   <span class="buy">Read More</span>
 </button>
 </Link> 
	
</div>
			
</div>
	
<div class="product-image">
	
	<img src={data.img} alt=""/>
	

<div class="info">
	<h2> Description</h2>
	<ul>
		<li><strong>Height : </strong>5 Ft </li>
		<li><strong>Shade : </strong>Olive green</li>
		<li><strong>Decoration: </strong>balls and bells</li>
		<li><strong>Material: </strong>Eco-Friendly</li>
		
	</ul>
</div>
</div>
</div>
            </>
            ))}

        </div>}

        
            {data.map((fillm)=> (
            <> 
                <button className="Link" onClick={() =>{  setstate(fillm.id) ; setview(true) }}>
                    <div className="img">
                        {fillm.NEW && <div className="NEW">New</div>}
                        <img src={fillm.img} onError={event => event.target.src="http://beepeers.com/assets/images/commerces/default-image.jpg"} alt="Avatar"  className="image"/>
                    </div>    
                </button></>))}
            </>
    )
}

export default Fillm

