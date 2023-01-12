import React, {useContext} from "react"
import incomeContext from "../store/income-context"

const Income =() =>{
  const{items} = useContext(incomeContext)
  console.log(items)
  

    return(
        <div className="flex items-center justify-center h-screen">
          <h1>Hello from Income</h1>
          <div  className="w-6/12 h-1/3 bg-green-500 m-auto flex-col ">
          <table class="table-auto">
     <thead>
        <tr>
        <th class="px-4 py-2">Header 1</th>
         <th class="px-4 py-2">Header 2</th>
         <th class="px-4 py-2">Header 3</th>
        </tr>
      </thead>
     <tbody>
      <tr class="bg-gray-200">
        <td class="border px-4 py-2">Data 1</td>
        <td class="border px-4 py-2">Data 2</td>
        <td class="border px-4 py-2">Data 3</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Data 4</td>
        <td class="border px-4 py-2">Data 5</td>
        <td class="border px-4 py-2">Data 6</td>
       </tr>
  </tbody>
</table>

          </div>
        </div>
    )
}

export default Income