import React, {useContext, useState} from "react"
import Navbar from "./components/Navbar"
// import IncomeForm from "./components/IncomeForm"
// import incomeContext from "./store/income-context"
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import IncomeList from "./components/IncomeList"
import IncomeContainer from "./components/IncomeContainer"
import Footer from "./components/Footer"

function App() {

   const [items, setItems] = useState([
  ])
  // { income: '1000', group: 'Weekly',  },
  // { income: '2000', group: 'Fortnightly',  },
  // { income: '3000', group: 'Monthly',  }
  //  const [selectedGroup, setSelectedGroup] = useState("Weekly");

// const addIncome = (newItem) => {
//   setItems(prevItems => {
//     const index = prevItems.findIndex(item => item.group === newItem.group);
//     if (index === -1) {
//       return [...prevItems, newItem];
//     } else {
//       const newItems = [...prevItems];
//       newItems[index] = newItem;
//       return newItems;
//     }
//   });
// }

const addIncome = (newItem) => {
  if (!newItem.group) {
    console.error('Error: missing group property');
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




  // const incomeContextValue = {
  //   items,
  //   setItems,
 
  // }
  return (
    <div className= "relative">
        <Navbar />
       <IncomeContainer onAdd={addIncome} items={items} />
        <Footer />
    </div>
   

  )
}

export default App


{/* <incomeContext.Provider value={incomeContextValue}>
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
    path="second"
    element={
      <IncomeList 

      />
    }
  />
</Routes>
 <Footer />
</Router>
</incomeContext.Provider> */}