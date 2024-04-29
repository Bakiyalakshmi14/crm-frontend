import "./Entry.style.css"
import React, { useState} from "react"
import { Login } from "../../Components/login/Login.Comp"
import { PasswordReset } from "../../Components/passwordReset/passwordReset.Comp"
export const Entry = ()=> {

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('')
    const [ formLoad, setFormLoad] = useState('login')

    const handleOnChange = e => {
        const { name, value} = e.target
        switch( name){
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        setEmail('')
        setPassword('')

        // if(!email || !password){
        //     return alert('Email and Password are required field')
        
    }

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
                        handleOnChange={handleOnChange} 
                        email={email} 
                        password={password} 
                        handleOnSubmit= {handleOnSubmit}
                        formSwitch = {formSwitch}/> }
                { formLoad === 'reset' &&
                    <PasswordReset
                        handleOnChange={handleOnChange} 
                        email={email} 
                        handleOnResetSubmit= {handleOnResetSubmit}
                        formSwitch = {formSwitch}/>
                }
            </div>
        </div>
    )
}