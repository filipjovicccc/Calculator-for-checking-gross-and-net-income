import React, {useContext} from "react"
import incomeContext from "../store/income-context"
import image2 from "../assests/img/bank2.png"

const Income =() =>{
  const{items} = useContext(incomeContext)
  console.log(items)
  

    return(
       
  <div className="flex opacity-85 items-center justify-center h-screen h-screen bg-center bg-cover" style={{backgroundImage: `url(${image2})`}}>
   
    <div className="w-6/12 h-1/3 bg-green-500
     p-4 rounded-lg shadow-lg flex flex-col" >
        <table className="table-auto w-full m-auto">
            <thead className="bg-gray-200">
                <tr>
                    <th className="px-4 bg-red-500 py-2 text-white font-medium">Header 1</th>
                    <th className="px-4 bg-red-500 py-2 text-white font-medium">Header 2</th>
                    <th className="px-4 bg-red-500 py-2 text-white font-medium">Header 3</th>
                    <th className="px-4 bg-red-500 py-2 text-white font-medium">Header 4</th>
                    <th className="px-4 bg-red-500 py-2 text-white font-medium">Header 5</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">Data 1</td>
                    <td className="border px-4 py-2">Data 2</td>
                    <td className="border px-4 py-2">Data 3</td>
                    <td className="border px-4 py-2">Data 4</td>
                    <td className="border px-4 py-2">Data 5</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Data 1</td>
                    <td className="border px-4 py-2">Data 2</td>
                    <td className="border px-4 py-2">Data 3</td>
                    <td className="border px-4 py-2">Data 4</td>
                    <td className="border px-4 py-2">Data 5</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Data 1</td>
                    <td className="border px-4 py-2">Data 2</td>
                    <td className="border px-4 py-2">Data 3</td>
                    <td className="border px-4 py-2">Data 4</td>
                    <td className="border px-4 py-2">Data 5</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Data 1</td>
                    <td className="border px-4 py-2">Data 2</td>
                    <td className="border px-4 py-2">Data 3</td>
                    <td className="border px-4 py-2">Data 4</td>
                    <td className="border px-4 py-2">Data 5</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
    )
}

export default Income