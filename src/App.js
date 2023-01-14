import React, {useContext, useState} from "react"
import Navbar from "./components/Navbar"
import IncomeForm from "./components/IncomeForm"
import incomeContext from "./store/income-context"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import IncomeList from "./components/IncomeList"
import Footer from "./components/Footer"

function App() {

   const [items, setItems] = useState([])

const addIncome = (newItem) => {
  setItems(prevItems => {
    const index = prevItems.findIndex(item => item.date === newItem.date);
    if (index === -1) {
      return [...prevItems, newItem];
    } else {
      const newItems = [...prevItems];
      newItems[index] = newItem;
      return newItems;
    }
  });
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
        path="/income"
        element={
          <IncomeList 
   
          />
        }
      />
    </Routes>
     <Footer />
    </Router>
    </incomeContext.Provider>

  )
}

export default App


