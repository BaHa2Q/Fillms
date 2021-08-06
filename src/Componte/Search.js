import React, { useState } from "react";
import { Movies } from "./data.json";
import './css/Search.css'
import { Link } from "react-router-dom";


function Search() {
    const [search, setSearch] = useState("");
    const data = Movies.Fillms.filter(film => film.Name.includes(search));

    return (
        <div className="nav-Search">
            <span class="iconify" data-icon="fa-solid:search" data-inline="false"></span>
            <input type="text" value={search} onChange={event => setSearch(event.target.value)} className="Search" />
                {search && < div className="filter">
                {data.map((val, index)=>
                <Link  key={index} className="LinkSearch" to={"/About-Fillm/" + val.id }>
                    <p className="wef3">
                       {val.Name}
                    </p>
                    </Link>
                
                )}
            </div>}
        </div>
    );
}

export default Search;