import React, {useContext, useState} from "react"
import Navbar from "./components/Navbar"
import IncomeForm from "./components/IncomeForm"
import incomeContext from "./store/income-context"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Income from "./components/Income"

function App() {

  // const{items, setItems} = useContext(incomeContext)

  const [items, setItems] = useState([])


  const addIncome = (newItems) => {
 setItems((prevItems) =>{
  return prevItems.concat(newItems)
 })
  }
  const incomeContextValue = {
    items,
    setItems,
 
  }
  return (
    
      <incomeContext.Provider value={incomeContextValue}>
    <Router>
    <Navbar />
    <Routes>
     <Route
       path="/"
       element={
        <IncomeForm
         onAdd={addIncome}
     
         />
       }

       />
      <Route 
        path="income"
        element={
          <Income 
   
          />
        }
      />

    </Routes>
    </Router>
    </incomeContext.Provider>

  )
}

export default App


