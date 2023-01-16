import React, { useState} from "react"
import Navbar from "./components/Navbar"
import IncomeContainer from "./components/IncomeContainer"
import Footer from "./components/Footer"

function App() {

   const [items, setItems] = useState([
  ])

const addIncome = (newItem) => {
  if (!newItem.group) {
    console.error('missing group property');
    return;
  }
  setItems(prevItems => {
    if(!newItem.group) return prevItems;
    const index = prevItems.findIndex(item => item.group === newItem.group);
    if (index === -1) {
      return [...prevItems, newItem];
    } else {
      const newItems = [...prevItems];
      newItems[index] = newItem;
      return newItems;
    }
  });
}

  return (
    <div className= "relative">
        <Navbar />
       <IncomeContainer onAdd={addIncome} items={items} />
        <Footer />
    </div>
   

  )
}

export default App


