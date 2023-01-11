import React, {useContext} from "react"
import incomeContext from "../store/income-context.js"

const Income =() =>{
  const{items, setItems} = useContext(incomeContext)
  console.log(items)

    return(
        <div>
          <h1>Hello from Income</h1>
        </div>
    )
}

export default Income