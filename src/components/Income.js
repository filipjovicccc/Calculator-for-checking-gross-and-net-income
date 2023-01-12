import React, {useContext} from "react"
import incomeContext from "../store/income-context"
import image2 from "../assests/img/bank2.png"

const Income =() =>{
  const{items} = useContext(incomeContext)
  console.log(items.map(item => item.text)[0])
  

    return(
       
  <div className="flex opacity-85 items-center justify-center h-screen h-screen bg-center bg-cover" style={{backgroundImage: `url(${image2})`}}>
   
    <div className="w-7/12 h-1/2 bg-green-500
     p-4 rounded-lg shadow-lg flex flex-col" >
     {items.map(item => {
        return(
     <div className="w-28 h-16 text-white text-2xl  flex justify-center items-center bg-red-500 mt-20">${(item.text[0])}</div>

        )
     })}
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
                    <td className="border px-4 py-2">Weekly</td>
                    <td className="border px-4 py-2">Fortnightly</td>
                    <td className="border px-4 py-2">Monthly</td>
                    <td className="border px-4 py-2">Annually</td>
                 
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Data 1</td>
                    <td className="border px-4 py-2">Data 2</td>
                    <td className="border px-4 py-2">Data 3</td>
                    <td className="border px-4 py-2">Data 4</td>
                  
                </tr>
                <tr>
                    <td className="border px-4 py-2">Data 1</td>
                    <td className="border px-4 py-2">Data 2</td>
                    <td className="border px-4 py-2">Data 3</td>
                    <td className="border px-4 py-2">Data 4</td>
                  
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Data 1</td>
                    <td className="border px-4 py-2">Data 2</td>
                    <td className="border px-4 py-2">Data 3</td>
                    <td className="border px-4 py-2">Data 4</td>
                   
                </tr>
                <tr >
                    <td className="border px-4 py-2">Data 1</td>
                    <td className="border px-4 py-2">Data 2</td>
                    <td className="border px-4 py-2">Data 3</td>
                    <td className="border px-4 py-2">Data 4</td>
                   
                </tr>
              </tbody>
            </table>
          </div>
          </div>
    )
}

export default Income