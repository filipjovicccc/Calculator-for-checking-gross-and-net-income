import React, {useContext, useState} from "react"
import Navbar from "./components/Navbar"
import IncomeForm from "./components/IncomeForm"
import incomeContext from "./store/income-context.js"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Income from "./components/Income"

function App() {

  const{items, setItems} = useContext(incomeContext)
  const [inputText, setInputText] = useState("");

  const addIncome = (item) => {
  setItems([ 
    ...items,
    {text: inputText, id:Math.random()*1000}
  ])
  setInputText("")
  }

  const incomeContextValue = {
    items,
    setItems
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
         items={items} 
         setItems={setItems} 
         onAdd={addIncome}
         inputText={inputText}
         setInputText={setInputText}


         />
       }

       />
      <Route 
        path="income"
        element={
          <Income 
            items={items}
          
          />
        }
      />

    </Routes>
    </Router>
    </incomeContext.Provider>

  )
}

export default App


