import React, {useRef, useState, Fragment} from "react"
import {Link} from "react-router-dom";
import image1 from "../assests/img/bank.png";

// const [isLinkDisabled, setIsLinkDisabled] = useState(true)
// const [selectedDate, setSelectedDate] = useState("Weekly");


const IncomeForm = ({formIsVisible, onAdd, setSelectedGroup, selectedGroup, setFormIsVisible, handleIncome}) => {
  

 
  const handleChange = (event) => {
    setSelectedGroup((event.target.value));
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    const rate = e.target.rate.value
    const income = e.target.income.value
    
    if(income.trim().length === 0){
      return alert("Please enter valid information")
    }
    const incomeData = { income: income, group: rate };
    if (!incomeData.group) {
      console.error('Group data not added');
      return
    }
    onAdd(incomeData);
 
     setSelectedGroup(rate);
     setFormIsVisible(prev => !prev)
  }

    return(
      <Fragment>
   <div className="opacity-85">
  <main className="flex items-center justify-center h-screen bg-center bg-cover" style={{ backgroundImage: `url(${image1})` }}>
        
    <div className="w-full md:w-7/12 h-2/5 bg-gray-500 p-10 absolute p-4 rounded-lg shadow-lg flex flex-col">
    <div className="bg-green-500 text-white  flex self-start py-2 px-4 rounded-lg mr-2 sm:mr-0 md:mr-2 lg:mr-4 xl:mr-6">Income</div>
      <h1 className="text-2xl font-medium text-center">Income Tax Calculator</h1>
      <form onSubmit={submitHandler} className="mt-4 divide-y divide-gray-400">
        <div className="py-2">
          <label className="block text-black-700 font-medium">What is your total income?</label>
          <div className="flex justify-between items-center">
          <input name="income" className="w-full md:w-9/12 border border-gray-400 rounded-lg py-2 px-3" type="text" placeholder="Enter your income here" />

          <select name="rate" onChange={handleChange} value={selectedGroup}  className="border border-gray-400 rounded-lg py-2 px-3">
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

          <button  className="bg-green-500 text-white  py-2 px-4 rounded-lg mr-2 sm:mr-0 md:mr-2 lg:mr-4 xl:mr-6">Gross Income</button>
    <button className="bg-green-500 text-white py-2 px-4 rounded-lg sm:ml-0 md:ml-2 lg:ml-4 xl:ml-6">Net Income</button>
  </div>
  </div>
 <div className="py-2 flex items-center">

  <button type="submit" className="bg-darkGray text-white  w-96 flex  items-center justify-center my-auto mt-10 mx-32 text-center py-2 px-5 rounded-lg mr-3 sm:mr-0 md:mr-2 lg:mr-4 xl:mr-6">Calculate</button>
 </div>
  </form>
            </div>
         </main>
         </div> 
         </Fragment>
    )
    
  }
  
  export default IncomeForm
  //  ${isLinkDisabled ? 'pointer-events-none' : "" }