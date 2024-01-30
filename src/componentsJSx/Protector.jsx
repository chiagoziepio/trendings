import {Navigate} from "react-router-dom"

const Protector = ({user, children}) => {
    if(!user){
        return <Navigate to = '/login'/>
    }
  return children
}

export default Protector