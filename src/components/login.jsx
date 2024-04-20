import React from "react";
import "./styling/login.css"
import { useLoaderData, Form, redirect, useActionData, useNavigation} from "react-router-dom";
import { loginUser } from "../pages/api";

export function loader( { request } ){
    return new URL(request.url).searchParams.get("message")
}
export async function action({ request }){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const url = new URL(request.url).searchParams.get("redirectTo")
    try{
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        const response = redirect(url ? `${url}` : "/host")
        response.body = true  
        return response
    }
    catch(err){
        return err
    }
}

export default function LoginForm(){
    const message = useLoaderData()
    const error = useActionData()
    const navigation = useNavigation().state

    return(
        <div className = "login-cn">
            <h1>Sign in to your account</h1>
            { message && <h3 className = "message">{message}</h3>}
            { error && <h3 className = "error">{error.message}</h3>}
            <Form method = "post" className = "login-form" replace>
                <input 
                    type = "email"
                    name = "email"
                    placeholder = "Email Address"
                    className = "login-field"
                />
                <br/>
                <input 
                    type = "password"
                    name = "password"
                    placeholder = "Password"
                    className = "login-field"
                />
                <br/>
                <button className = "submit-btn" disabled = {navigation === "submitting"}>{ navigation === "submitting" ? "Logging in..." : "Login"}</button>
            </Form>
            <div className = "ask-login">
                Don't have an account? <a href="#">Create one now</a>
            </div>
        </div>
    )
}