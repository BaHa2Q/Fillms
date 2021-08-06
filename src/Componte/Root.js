import React from 'react'
import {Movies} from './data.json'
import Topfillm from './Top_fillm'



function Root() {    
    let max
    const newfillm = Movies.Fillms.filter((newfillm) =>{return newfillm.Evaluation})
    let i
    for (i = 0; i < newfillm.length; i++) {
        if (newfillm[i] = 90) {
            max = newfillm[0]            
        }
    }
    console.log(newfillm[0]);
    return (
    <>
    <div>{newfillm}</div>
    </> 
    )
}

export default Root
