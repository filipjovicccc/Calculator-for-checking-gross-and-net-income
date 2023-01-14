import React, {useRef, useState, Fragment} from "react"
import {Link} from "react-router-dom";
import image1 from "../assests/img/bank.png";



const IncomeForm = (props) => {
  const [isLinkDisabled, setIsLinkDisabled] = useState(true)
  
  const incomeRef = useRef()
  const dateRef = useRef()

  
  const submitHandler = (e) => {
    e.preventDefault();
    const referentIncome = incomeRef
    const referentDate = dateRef
    if(referentIncome.current.value.trim().length === 0){
      return alert("Please enter valid information")
    }
    const incomeData=  {income: referentIncome.current.value, date: referentDate.current.value};
    
    props.onAdd(incomeData)
    referentIncome.current.value = " ",
    referentDate.current.value = ""
    setIsLinkDisabled(false)
    }
   
    return(
      <Fragment>
   <div className="opacity-85">
  <main className="flex items-center justify-center h-screen bg-center bg-cover" style={{ backgroundImage: `url(${image1})` }}>
    <div className="w-full md:w-7/12 h-1/2 bg-gray-500 p-10 absolute p-4 rounded-lg shadow-lg flex flex-col">
      <h1 className="text-2xl font-medium text-center">Income Tax Calculator</h1>
      <form className="mt-4 divide-y divide-gray-400">
        <div className="py-2">
          <label className="block text-black-700 font-medium">What is your total income?</label>
          <div className="flex justify-between items-center">
          <input ref={incomeRef} className="w-full md:w-9/12 border border-gray-400 rounded-lg py-2 px-3" type="text" placeholder="Enter your income here" />

          <select ref={dateRef} className="border border-gray-400 rounded-lg py-2 px-3">
              <option>Weekly</option>
              <option>Fortnightly</option>
              <option>Monthly</option>
              <option>Annually</option>
            </select>
          </div>
        </div>
        <div className="py-2">
          <h1 className="text-black-700 font-medium">Please choose the income type</h1>
          <div className="flex items-center mt-5 justify-center">

          <button onClick={submitHandler} className="bg-green-500 text-white  py-2 px-4 rounded-lg mr-2 sm:mr-0 md:mr-2 lg:mr-4 xl:mr-6">Gross Income</button>
    <button className="bg-green-500 text-white py-2 px-4 rounded-lg sm:ml-0 md:ml-2 lg:ml-4 xl:ml-6">Net Income</button>
  </div>
  </div>
 <div className="py-2 flex items-center">
  <Link to="/income" className={`bg-blue-500 mt-10 text-white text-center py-2 px-4 rounded-lg m-auto ${isLinkDisabled ? 'pointer-events-none' : "" } sm:w-24 md:w-32 lg:w-48 xl:w-64`}
  >Calculate</Link>
 </div>
  </form>
            </div>
         </main>
         </div> 
         </Fragment>
    )

}

export default IncomeForm