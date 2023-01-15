import React, { useState } from 'react';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function IncomeContainer({ onAdd, items }) {
  const [formIsVisible, setFormIsVisible] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState("Weekly");
    
  const handleChange = (event) => {
    setSelectedGroup(event.target.value);
  }


  return (
    <div className="flex flex-col justify-around">
 
      
      {formIsVisible ? (
        <IncomeForm formIsVisible={formIsVisible} setFormIsVisible={setFormIsVisible} onAdd={onAdd} handleChange={handleChange}  selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}  />
      ) : (
        <IncomeList formIsVisible={formIsVisible} setFormIsVisible={setFormIsVisible} items={items}  selectedGroup={selectedGroup} />
      )}
    </div>
  );
}

export default IncomeContainer;