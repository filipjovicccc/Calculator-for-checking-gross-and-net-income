import React from "react";
import { BsBank } from "react-icons/bs"

const Navbar = () => {

    const iconStyle = {fontSize: "1.5em", color: "white"}
   
    return(
        <div className="w-full h-12 flex items-center justify-evenly text-center bg-darkGray">
        <h1 className="text-white">Income calculator</h1>
        <div className="flex justify-between w-20"><BsBank style={iconStyle}/>
       </div>
       </div>
    )
}

export default Navbar