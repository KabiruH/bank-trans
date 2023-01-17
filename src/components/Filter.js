import React from "react";

function Filter ({newSearch}) {
    return (
        <div>
            <input type="text" 
            placeholder="Search transactions"
            onChange={newSearch}
            />
            <i className='circular search link icon'></i>
        </div>
    )
}

export default Filter;