import React from "react";


function Filter ({newSearch}) {
    const BarStyle = {width:"20rem",background:"#D0E0D0", border:"none", padding:"0.5rem"}
       return (
        <div className="search">
            <input 
            style={BarStyle}
            type="text" 
            placeholder="Search transactions"
            onChange={newSearch}
            />
            <button onClick={newSearch}>Search</button>


        </div>
    )
}

export default Filter;