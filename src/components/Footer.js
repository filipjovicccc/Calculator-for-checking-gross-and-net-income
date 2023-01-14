import React from "react"
import { BsBank } from "react-icons/bs"
import { GiBanknote } from "react-icons/gi"
import {GrApple} from "react-icons/gr"




const Footer = () => {
      
    const footerIcon = {fontSize: "3em", color: "white"}
    return(
        <div className="w-full flex justify-center items-center h-40 bg-darkGray">

        <div className="flex w-1/4 justify-between">

        <BsBank style={footerIcon}/>
        <GiBanknote style={footerIcon}/>
        <GrApple style={footerIcon}/>

        </div>
      
           
        </div>
    )

}

export default Footer