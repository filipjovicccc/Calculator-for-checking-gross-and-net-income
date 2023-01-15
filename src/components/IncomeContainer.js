import React, { useState } from 'react';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function IncomeContainer({ onAdd, items }) {
  const [formIsVisible, setFormIsVisible] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState("Monthly");
  const [selectedIncomeType, setSelectedIncomeType] = useState("Net")
    
  const handleIncomeType = (e) => {
    setSelectedIncomeType(e.target.value)
  }
    


  return (
    <div className="flex flex-col justify-around">
 
      
      {formIsVisible ? (
        <IncomeForm handleIncome={handleIncomeType} formIsVisible={formIsVisible} setFormIsVisible={setFormIsVisible} onAdd={onAdd}  selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}  />
      ) : (
        <IncomeList selectedIncomeType={selectedIncomeType} formIsVisible={formIsVisible} setFormIsVisible={setFormIsVisible} items={items}  selectedGroup={selectedGroup} />
      )}
    </div>
  );
}

export default IncomeContainer;