import React,{Component} from "react";

export default class FormCBC extends Component {
    constructor(){
        super();
        this.state = {
            userName: "",
            password: ""
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let userName=this.state.userName;
        let password=this.state.password;
        console.log({userName,password});
    }


    render(){
        return(
            <div>
                <form action="">
                    <label htmlFor="un">User Name</label><br />
                    <input type="text" name="" id="un" onChange={(e)=>{
                        this.setState({userName:e.target.value})
                    }}/><br />
                    <label htmlFor="pwd">Password</label><br />
                    <input type="password" name="" id="pwd" onChange={(e)=>{
                        this.setState({password:e.target.value})
                    }}/><br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}