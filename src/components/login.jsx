import React from "react";
import "./styling/login.css"

export default function LoginForm(){

    const [formData, setFormData] = React.useState({email : "", password : ""})

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    return(
        <div className = "login-cn">
            <h1>Sign in to your account</h1>
            <form onSubmit = {handleSubmit} className = "login-form">
                <input 
                    type = "email"
                    name = "email"
                    placeholder = "Email Address"
                    value = {formData.email}
                    onChange = {handleChange}
                    className = "login-field"
                />
                <br/>
                <input 
                    type = "password"
                    name = "password"
                    placeholder = "Password"
                    value = {formData.password}
                    onChange = {handleChange}
                    className = "login-field"
                />
                <br/>
                <button className = "submit-btn">Login</button>
            </form>
            <div className = "ask-login">
                Don't have an account? <a href="#">Create one now</a>
            </div>
        </div>
    )
}