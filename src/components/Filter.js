import React from "react";

const BarStyle = { width: "20rem", background: "#D0E0D0", border: "none", padding: "0.5rem" }

function Filter({ handleSearch }) {


    return (
        <div className="search">
            <input
                style={BarStyle}
                type="text"
                placeholder="Search transactions"
                onChange={handleSearch}
            />
        </div>
    )
}



export default Filter;