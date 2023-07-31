import {useContext} from "react"
import { RegisterContext } from "../context/RegisterProvider"

export const EmailConfirmation = () => {

    const {token} = useContext(RegisterContext);

    return(
        <div>
            <h2>Register Successfully, this your token</h2>
            <h3>{token}</h3>
            
        </div>
    )
}