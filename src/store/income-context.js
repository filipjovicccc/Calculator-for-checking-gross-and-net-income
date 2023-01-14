import {createContext} from "react"

 const incomeContext = createContext({
    items:[ {income: 1000, date: "Monthly"}],
    setItems: () => {}
}
)
export default incomeContext