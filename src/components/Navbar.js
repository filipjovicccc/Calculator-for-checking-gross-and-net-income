import React from "react";
import { BsBank } from "react-icons/bs"

const Navbar = () => {
   
    return(
        <div className="w-full h-11 text-center bg-purple-400">
        <h3 className="text-white">Income calculator</h3>
        <BsBank />
        </div>
    )
}

export default Navbar