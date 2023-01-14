import React from "react";
import { BsBank } from "react-icons/bs"
import { GrMoney } from "react-icons/gr"
const Navbar = () => {

    const iconStyle = {fontSize: "1.5em"}
   
    return(
        <div className="w-full h-12 flex items-center justify-evenly text-center bg-purple-400">
        <h1 className="text-black">Income calculator</h1>
        <div className="flex justify-between w-20"><BsBank style={iconStyle}/>
        <GrMoney style={iconStyle}/></div>

        
        </div>
    )
}

export default Navbar