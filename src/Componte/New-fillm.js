import React,{ useState } from 'react'

import { Movies } from './data.json'

function Newfillm() {
    const newfillm = Movies.Fillms.filter((newfillm) =>{return newfillm.NEW})
    const [state, setstate] = useState("")
    const  [view, setview] = useState(false)
    const data = Movies.Fillms.map((data) => (data)).filter((datas)=> datas.id === state)
            
    return (
        <>
{view && <div id="myModal" className="modal">
{data.map(data =>
<>
<div id="container">	
<div class="product-details">
<h1>{data.Name}</h1>
<span class="hint-star star">
<button class="close" onClick={()=> setview(false)}>&times;</button>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star-o" aria-hidden="true"></i>
</span>
<p class="information">{data.description}</p>
<div class="control">
<button class="btn">
<span class="price">$250</span>
<span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
<span class="buy">Get now</span>
</button>
</div>
</div>
<div class="product-image">
<img src={data.img} alt=""/>
<div class="info">
<h2> Description</h2>
<ul>
<li><strong>Height : </strong>5 Ft </li>
</ul>
</div>
</div>
</div>
                </>)}
        </div>}

        
            {newfillm.map((fillm)=> (
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

export default Newfillm
