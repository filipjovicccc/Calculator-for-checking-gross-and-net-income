// const referentIncome = incomeRef
// if(
//   referentIncome.current.value.trim().length === 0
// ){
//   return alert("Please enter valid information")
// }
// const incomeData = {
  //  income: referentIncome.current.value
  // }
  import React, {useRef, useContext} from "react"
import {Link} from "react-router-dom"


const IncomeForm = (props) => {
  
  const incomeRef = useRef()
  
  const submitHandler = (e) => {
    e.preventDefault();
    const referentIncome = incomeRef
    if(referentIncome.current.value.trim().length === 0){
      return alert("Please enter valid information")
    }
    const incomeData= {text: referentIncome.current.value};
    
    props.onAdd(incomeData)
    referentIncome.current.value = " "
    }
   
    return(
        <main className="flex items-center justify-center h-screen">
        <Link className="bg-blue-500 text-white py-2 px-4 rounded-lg" to="income">Income</Link>
        <div className="w-6/12 h-1/3 bg-red-500 m-auto flex-col ">
          <h1>Income tax calculator</h1>
          <form className="divide-current flex flex-col">
           <label>What is your total income?</label>
           <div className="justify-between mx-10">

           <input
        
            ref={incomeRef} 
            className="w-9/12" type="text"/>
           <select >
             <option>Weekly</option>
             <option>Fortnightly</option>
             <option>Monthly</option>
             <option>Annually</option>

           </select>
           </div>
           <div >
            <h1>Please choose the income type</h1>
            <div>
             <button className="bg-green-500 text-white py-2 px-4 rounded">Gross Income</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded">Net Income</button>
            </div>
            <button onClick={submitHandler} className="bg-blue-500 text-white py-2 px-8 rounded">Calculate </button>
           </div>

          </form>
        </div>

        </main>
    )

}

export default IncomeForm