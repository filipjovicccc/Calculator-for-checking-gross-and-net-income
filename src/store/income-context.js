import {createContext} from "react"

 const incomeContext = createContext({
    items:[],
    setItems: () => {}
}
)
export default incomeContext