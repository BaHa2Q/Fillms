import { useParams } from 'react-router-dom'
import Error404 from './error404';
import { Movies } from"./data.json"


function About_Fillm() {
    let {id} = useParams();
    
    const data = Movies.Fillms.filter(data => (data.id ) === Number(id))[0]
    
    if (data === null) {
          return (
            <div><Error404/></div>
          )
    }

    return (
        <div>
            <div>
                <h1>{data?.id}</h1>
                <img src={data.img} alt={data.Name_Fillm}></img>
            </div>
        </div>
    )
}

export default About_Fillm
