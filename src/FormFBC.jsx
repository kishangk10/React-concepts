import React, { useState } from "react"
const FormFBC =()=>{
    let[userName,setUserName]=useState("")
    let[password,setPassword]=useState("")

    let handleSubmit =(e)=>{
        e.preventDefault()
        console.log(userName,password)
    }
    return(
        <div>
            <form action="">
                <label htmlFor="un">User Name</label><br />
                <input type="text" name="" id="" /><br />
                <label htmlFor="pwd">Password</label><br />
                <input type="password" name="" id="" /><br />
                <label htmlFor="gen">Gender</label>
                Male :-<input type="radio" name="male" id="gen" value="male"/>
                Female :-<input type="radio" name="female" id="gen" value="female"/><br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default FormFBC;