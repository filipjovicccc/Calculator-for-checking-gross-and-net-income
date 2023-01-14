// import React, {useContext} from "react"
// import incomeContext from "../store/income-context"
// import image2 from "../assests/img/bank2.png"
// import Income from "./Income"

// const IncomeList =() =>{
//   const{items} = useContext(incomeContext)
  
  
//     return(
       
//    <div className="flex opacity-85 items-center justify-center  h-screen bg-center bg-cover" style={{backgroundImage: `url(${image2})`}}>

//      {items.map((item, index) => {
//         return <Income key={index} date={item.date} income={item.income} />
           
         
//      })}
     
//           </div>
 
//     )
// }

// export default IncomeList

// import React, { useContext, useState, useEffect } from "react"
// import incomeContext from "../store/income-context"
// import image2 from "../assests/img/bank2.png"
// import Income from "./Income"

// const IncomeList =() =>{
//   const{items, setItems} = useContext(incomeContext)
//   const [update, setUpdate] = useState(null);

//   useEffect(() => {
//     if (update) {
//       const newItems = [...items];
//       newItems[update.index] = update.item;
//       setItems(newItems);
//       setUpdate(null);
//     }
//   }, [update]);

//   const handleUpdate = (index, item) => {
//     setUpdate({ index, item });
//   };
  
//     return(
       
//    <div className="flex opacity-85 items-center justify-center h-screen h-screen bg-center bg-cover" style={{backgroundImage: `url(${image2})`}}>

//      {items.map((item, index) => {
//         return <Income key={index} date={item.date} income={item.income} handleUpdate={handleUpdate} index={index} />
           
         
//      })}
     
//           </div>
 
//     )
// }

// export default IncomeList
import React, { useContext, useState, useEffect } from "react"
import incomeContext from "../store/income-context"
import image2 from "../assests/img/bank2.png"
import Income from "./Income"

const IncomeList =() =>{
  const{items, setItems} = useContext(incomeContext)
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    if (update) {
      const newItems = [...items];
      newItems[update.index] = update.item;
      setItems(newItems);
      setUpdate(null);
    }
  }, [update]);

  const handleUpdate = (index, item) => {
    setUpdate({ index, item });
  };
  
    return(
       
   <div className="flex opacity-85 items-center justify-center h-screen h-screen bg-center bg-cover" style={{backgroundImage: `url(${image2})`}}>

     {items.map((item, index) => {
        return <Income key={index} date={item.date} income={item.income} handleUpdate={handleUpdate} index={index} />
           
         
     })}
     
          </div>
 
    )
}

export default IncomeList