import React, {  useState, useEffect, useMemo } from "react"
import image2 from "../assests/img/bank.png"
import Income from "./Income"


const IncomeList =(props) =>{
 
  const [update, setUpdate] = useState(null);
  // const filteredItems = props.items.filter((item) => item.group === props.selectedGroup);
  const filteredItems = useMemo(() => {
    return props.items.filter((item) => item.group === props.selectedGroup);
}, [props.items, props.selectedGroup]);


  useEffect(() => {
    if (update) {
      const newItems = [...props.items];
      newItems[update.index] = update.item;
      props.setItems(newItems);
      setUpdate(null);
    }
  }, [update]);

  const handleUpdate = (index, newItem) => {
    props.setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index] = newItem;
      return newItems;
    });
  };
  
    return(
       
   <div className="flex  opacity-85 items-center justify-center h-screen bg-center bg-cover" style={{backgroundImage: `url(${image2})`}} >

     {filteredItems.map((item, index) => {
           
     return <Income 
     formIsVisible={props.formIsVisible} 
     setFormIsVisible={props.setFormIsVisible} 
     key={index} group={item.group} 
     income={item.income}
     handleUpdate={handleUpdate} 
      index={index} />
         
     })}
     
          </div>
 
    )
}

export default IncomeList