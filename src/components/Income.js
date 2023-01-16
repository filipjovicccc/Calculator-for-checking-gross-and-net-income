import React, {useState, useEffect} from "react"

const Income =(props) =>{

const [week, setWeek] = useState();
const [fortnightly, setFortnightly] = useState();
const [month, setMonthly] = useState();
const [annual, setAnnual] = useState();

useEffect(() => {
  const calculateIncome = (group, income) => {
    switch (group) {
      case "Weekly":
        setWeek(Math.round(income));
        setFortnightly(Math.round(income * 2));
        setMonthly(Math.round(income * 4));
        setAnnual(Math.round(income * 52));
        break;
      case "Fortnightly":
        setFortnightly(Math.round(income));
        setWeek(Math.round(income / 2));
        setMonthly(Math.round(income * 2));
        setAnnual(Math.round(income * 26));
        break;
      case "Monthly":
        setMonthly(Math.round(income));
        setWeek(Math.round(income / 4));
        setFortnightly(Math.round(income / 2));
        setAnnual(Math.round(income * 13));
        break;
      case "Annually":
        setAnnual(Math.round(income));
        setWeek(Math.round(income / 52));
        setFortnightly(Math.round(income / 26));
        setMonthly(Math.round(income / 13));
        break;
    }
  };

  calculateIncome(props.group, +props.income);
}, [props.group, props.income]);

const taxWeek = week * 0.22;
const grossWeek = week + taxWeek;

const taxFortnightly = fortnightly * 0.22;
const grossFortnightly = taxFortnightly + fortnightly;

const taxMonth = month * 0.22;
const grossMonthly = month + taxMonth;

const taxAnnual = annual * 0.22;
const grossAnnually = annual + taxAnnual
console.log(props.income)
console.log(props.selectedIncomeType)

 
  return(
        <div className="flex items-center justify-center">
        <div className="w-3/5 md:w-7/12 h-2/5 bg-gray-500 p-10 absolute p-4 rounded-lg shadow-lg flex flex-col sm:min-h-2/5  overflow-hidden" >
        <button className="bg-green-500 text-white hover:bg-darkGray flex self-start  py-2 px-4 rounded-lg mr-2 sm:mr-0 md:mr-2 lg:mr-4 xl:mr-6"  onClick={() => props.setFormIsVisible(!props.formIsVisible)}>
        {props.formIsVisible ? 'Income-details' : ''}Income-details
      </button>
        <div className="flex w-3/6  flex-row border-solid border-black">
          <div  className="w-28 h-16 text-white text-2xl  flex justify-center items-center bg-red-500 mt-20">${props.selectedIncomeType === "Net" ? parseFloat(props.income): (parseFloat(props.income) + (parseFloat(props.income) * 0.22))}</div>
          <div className="w-28 h-16 text-white text-2xl  flex justify-center items-center bg-red-500 mt-20">{(props.group)}</div>    
        </div>
        <table className="table-auto w-full md:table-fixed m-auto overflow-x-auto sm:overflow-x-scroll">
        <thead className="bg-gray-200">
                   <tr>
                       <th className="px-4 text-left bg-red-500 py-2 text-white font-medium">Frequency</th>
                       <th className="px-4 text-left  bg-red-500 py-2 text-white font-medium">Gross income</th>
                       <th className="px-4 text-left  bg-red-500 py-2 text-white font-medium">Tax</th>
                       <th className="px-4 text-left  bg-red-500 py-2 text-white font-medium">Net income</th>
                      
                   </tr>
               </thead>
               <tbody>
                     <tr>
                       <td className="border px-4 xs py-2 sm:text-xs">Weekly</td>
                       <td className="border px-4 -xs py-2 sm:text-xs">${grossWeek}</td>
                       <td className="border px-4 xs py-2 sm:text-xs">${taxWeek}</td>
                       <td className="border px-4 xs py-2 sm:text-xs">${week}</td>
                    
                   </tr>
                   <tr className="bg-gray-100">
                       <td className="border px-4 py-2 sm:text-xs">Fortnightly</td>
                       <td className="border px-4 py-2 sm:text-xs">${grossFortnightly}</td>
                       <td className="border px-4 py-2 sm:text-xs">${taxFortnightly}</td>
                       <td className="border px-4 py-2 sm:text-xs">${fortnightly}</td>
                     
                   </tr>
                   <tr>
                       <td className="border px-4 py-2 sm:text-xs">Monthly</td>
                       <td className="border px-4 py-2 sm:text-xs">${grossMonthly}</td>
                       <td className="border px-4 py-2 sm:text-xs">${taxMonth}</td>
                       <td className="border px-4 py-2 sm:text-xs">${month}</td>
                     
                   </tr>
                   <tr className="bg-gray-100">
                       <td className="border px-4 py-2 sm:text-xs">Annually</td>
                       <td className="border px-4 py-2 sm:text-xs">${grossAnnually}</td>
                       <td className="border px-4 py-2 sm:text-xs">${taxAnnual}</td>
                       <td className="border px-4 py-2 sm:text-xs">${annual}</td>
                      
                   </tr>
                 
                 </tbody>
        </table>
      </div>
      </div>
      )
  }

export default Income
       