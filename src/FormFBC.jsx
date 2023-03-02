import React, { useState } from "react"
const FormFBC =()=>{
    let[userName,setUserName]=useState("")
    let[password,setPassword]=useState("")
    let[gender,setGender]=useState("")

    let handleSubmit =(e)=>{
        e.preventDefault()
        console.log({userName,password,gender})
    }
    return(
        <div>
            <form action="">
                <label htmlFor="un">User Name</label><br />
                <input type="text" name="" id="" onChange={(e)=>{
                    setUserName(e.target.value);
                }}/><br />
                <label htmlFor="pwd">Password</label><br />
                <input type="password" name="" id="" onChange={(e)=>{
                    setPassword(e.target.value);
                }}/><br />
                <label htmlFor="gen">Gender :- </label>
                Male :-<input type="radio" id="gen" name="gen" value="male" onChange={(e)=>{
                    setGender(e.target.value);
                }}/>
                Female :-<input type="radio" name="gen" id="gen" value="female" onChange={(e)=>{
                    setGender(e.target.value);
                }}/><br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default FormFBC;