import React, {useContext} from "react"
import incomeContext from "../store/income-context"
import image2 from "../assests/img/bank2.png"
import Income from "./Income"

const IncomeList =() =>{
  const{items} = useContext(incomeContext)
  
  
    return(
       
   <div className="flex opacity-85 items-center justify-center h-screen h-screen bg-center bg-cover" style={{backgroundImage: `url(${image2})`}}>

     {items.map(item => {
        return <Income date={item.date} income={item.income} />
           
         
     })}
     
          </div>
 
    )
}

export default IncomeList