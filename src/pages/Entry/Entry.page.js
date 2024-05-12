import "./Entry.style.css"
import React, { useState} from "react"
import { Login } from "../../Components/login/Login.Comp"
import { PasswordReset } from "../../Components/passwordReset/passwordReset.Comp"
export const Entry = ()=> {
    // sessionStorage.removeItem('accessJWT');
    const [ formLoad, setFormLoad] = useState('login')

    const formSwitch = ( formType) => {
        setFormLoad( formType)
        // setEmail('')
    }

    const handleOnResetSubmit = e => {
        e.preventDefault()
    }

    return(
        <div className="entry-page bg-info">
            <div className="p-5 mjb-4 bg-light rounded-3 shadow form-box">
                { formLoad === 'login' &&
                    <Login 
                        formSwitch = {formSwitch}/> }
                { formLoad === 'reset' &&
                    <PasswordReset
                        handleOnResetSubmit= {handleOnResetSubmit}
                        formSwitch = {formSwitch}/>
                }
            </div>
        </div>
    )
}