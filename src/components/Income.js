import React, {useState} from "react"

const Income =(props) =>{
    // const [week, setWeek] = useState()
    // const [netIncome, setNetIncome] = useState()
    // const [tax, setTax] = useState()
    // const [grossIncome, setGrossIncome] = useState()

    // console.log(props.item.date === "Weekly")
//    const filteredWeeks = props.filter((item) => item.date === "Weekly")
//    console.log(filteredWeeks)

  return(
       
        <div className="w-7/12 h-1/2 bg-green-500
        p-4 rounded-lg shadow-lg flex flex-col" >

   <div className="w-28 h-16 text-white text-2xl  flex justify-center items-center bg-red-500 mt-20">${(props.income)}</div>
   <div className="w-28 h-16 text-white text-2xl  flex justify-center items-center bg-red-500 mt-20">{(props.date)}</div>    
           <table className="table-auto w-full m-auto">
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
                       <td className="border px-4 xs py-2">Weekly232323</td>
                       <td className="border px-4 -xs py-2">data 1</td>
                       <td className="border px-4 xs py-2">data 2</td>
                       <td className="border px-4 xs py-2">data 3</td>
                    
                   </tr>
                   <tr className="bg-gray-100">
                       <td className="border px-4 py-2">Fortnightly</td>
                       <td className="border px-4 py-2">Data 2</td>
                       <td className="border px-4 py-2">Data 3</td>
                       <td className="border px-4 py-2">Data 4</td>
                     
                   </tr>
                   <tr>
                       <td className="border px-4 py-2">Monthly</td>
                       <td className="border px-4 py-2">Data 2</td>
                       <td className="border px-4 py-2">Data 3</td>
                       <td className="border px-4 py-2">Data 4</td>
                     
                   </tr>
                   <tr className="bg-gray-100">
                       <td className="border px-4 py-2">Annually</td>
                       <td className="border px-4 py-2">Data 2</td>
                       <td className="border px-4 py-2">Data 3</td>
                       <td className="border px-4 py-2">Data 4</td>
                      
                   </tr>
                 
                 </tbody>
               </table>
             </div>
 
        
    )
}

export default Income