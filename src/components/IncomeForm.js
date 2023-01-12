import React, {useRef, useContext, Fragment} from "react"
import {Link} from "react-router-dom";
import image1 from "../assests/img/bank.png";


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
      <Fragment>
    <div className="opacity-85">
      <main className="flex items-center  z-index:0 relative justify-center h-screen bg-center bg-cover" style={{backgroundImage: `url(${image1})`}}>
     

          <div className="w-7/12 h-1/2 bg-red-500 p-10 absolute p-4 z-index:10 rounded-lg shadow-lg flex flex-col">
          {/* <Link className="bg-blue-500 text-white py-1 px-1 rounded-lg mr-2" to="income">Income</Link> */}
        <h1 className="text-2xl font-medium text-center">Income Tax Calculator</h1>
        <form className="mt-4 divide-y divide-gray-400">
            <div className="py-2">
                <label className="block text-gray-700 font-medium">What is your total income?</label>
                <div className="flex justify-between items-center">
                    <input ref={incomeRef} className="w-9/12 border border-gray-400 rounded-lg py-2 px-3" type="text" placeholder="Enter your income here" />
                    <select className="border border-gray-400 rounded-lg py-2 px-3">
                        <option>Weekly</option>
                        <option>Fortnightly</option>
                        <option>Monthly</option>
                        <option>Annually</option>
                    </select>
                </div>
            </div>
            <div className="py-2">
                <h1 className="text-gray-700 font-medium">Please choose the income type</h1>
                <div className="flex items-center mt-5 justify-center">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2">Gross Income</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Net Income</button>
                </div>
            </div>
            <div className="py-2 flex items-center">
                <button onClick={submitHandler} className="bg-blue-500 w-3/5 text-white mt-10  py-2 px-8 rounded-lg m-auto">Calculate</button>
            </div>
        </form>
            </div>
         </main>
         </div>
         </Fragment>
    )

}

export default IncomeForm