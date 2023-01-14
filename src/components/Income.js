import React, {useState, useEffect} from "react"

const Income =(props) =>{

const [week, setWeek] = useState();
const [fortnightly, setFortnightly] = useState();
const [month, setMonthly] = useState();
const [annual, setAnnual] = useState();

useEffect(() => {
  const calculateIncome = (frequency, income) => {
    switch (frequency) {
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

  calculateIncome(props.date, +props.income);
}, [props.date, props.income]);

const taxWeek = week * 0.22;
const grossWeek = week + taxWeek;

const taxFortnightly = fortnightly * 0.22;
const grossFortnightly = taxFortnightly + fortnightly;

const taxMonth = month * 0.22;
const grossMonthly = month + taxMonth;

const taxAnnual = annual * 0.22;
const grossAnnually = annual + taxAnnual;
 
  return(
       
        <div className="w-7/12 h-1/2 sm:block md:table-auto md:table-fixes bg-green-500
        p-4 rounded-lg shadow-lg flex flex-col" >

        <div className="flex w-3/6  flex-row border-solid border-black">
        <div  className="w-28 h-16 text-white text-2xl  flex justify-center items-center bg-red-500 mt-20">${(props.income)}</div>
        <div className="w-28 h-16 text-white text-2xl  flex justify-center items-center bg-red-500 mt-20">{(props.date)}</div>    

        </div>

   
           <table className="table-auto w-full md:table-fixed m-auto">
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
                       <td className="border px-4 xs py-2">Weekly</td>
                       <td className="border px-4 -xs py-2">${grossWeek}</td>
                       <td className="border px-4 xs py-2">${taxWeek}</td>
                       <td className="border px-4 xs py-2">${week}</td>
                    
                   </tr>
                   <tr className="bg-gray-100">
                       <td className="border px-4 py-2">Fortnightly</td>
                       <td className="border px-4 py-2">${grossFortnightly}</td>
                       <td className="border px-4 py-2">${taxFortnightly}</td>
                       <td className="border px-4 py-2">${fortnightly}</td>
                     
                   </tr>
                   <tr>
                       <td className="border px-4 py-2">Monthly</td>
                       <td className="border px-4 py-2">${grossMonthly}</td>
                       <td className="border px-4 py-2">${taxMonth}</td>
                       <td className="border px-4 py-2">${month}</td>
                     
                   </tr>
                   <tr className="bg-gray-100">
                       <td className="border px-4 py-2">Annually</td>
                       <td className="border px-4 py-2">${grossAnnually}</td>
                       <td className="border px-4 py-2">${taxAnnual}</td>
                       <td className="border px-4 py-2">${annual}</td>
                      
                   </tr>
                 
                 </tbody>
               </table>
             </div>
  )
}

export default Income
    
