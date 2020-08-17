import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loginAs } from '../../stores/actions/action';

const Addtodo = (props) => {

	const history = useHistory();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [ error, setError] = useState(false);
	const [errorMsg , setErrorMsg] = useState("");
	const [type , setType] = useState(0);

	// To  Manage the State in the Component :-
	let { userType } =  useSelector( state => state.User );

	// To dispatch an actions to the reducers :-
	const dispatchActions = useDispatch();

	const login = (e) => {
		e.preventDefault();
		if(userName === "" || password === ""){
			setError(true);
			setErrorMsg("Fields are required");
			return false ;
		}
		if(type === 0){
			setError(true);
			setErrorMsg("Please Select One Field");
			return false ;
		}
		dispatchActions(loginAs(type));
		history.push(`/userlist`);
	}

	const handleChange = (e, type) => {

		if(type === "username"){
			setUserName(e.target.value);
		}else if(type === "password"){
			setPassword(e.target.value);
		}else if(type === "admin"){
			setType(1);
		}else if(type === "user"){
			setType(2);
		}
	}

	return (
		<>
			<form onSubmit = {login} className = "card card-header" style = {{textAlign: "initial"}}>
			  <div className="form-group">
			    <label htmlFor="email">Email address:</label>
			    <input 
			        type="text" 
			        className="form-control" 
			        value = {userName} 
			        onChange = {(e) => handleChange(e, "username") }
			    	placeholder="Enter Username" 
			    	id="email" 
			    />
			    {error && userName === "" && <span style = {{color : "red"}}>{errorMsg}</span>}
			  </div>
			  <div className="form-group">
			    <label htmlFor="pwd">Phone:</label>
			    <input type="password" 
			           className="form-control"  
			           value = {password} 
			           onChange = {(e) => handleChange(e, "password") }
			           placeholder="Enter Phone Number" 
			           id="pwd" 
			    />
			    {error && password === "" && <span style = {{color : "red"}}>{errorMsg}</span>}
			  </div>
			  <div>
			  	  {error && type === 0 && <span style = {{color : "red"}}>{errorMsg}</span>}
				  <div className="form-group" style = {{display: "flex", width : "344px"}}>
				    Login as Admin
				    <input type="radio" 
				           className="form-control"  
				           value = {type} 
				           onChange = {(e) => handleChange(e, "admin") } 
				           name = "type"
				           style = {{width: "auto", marginLeft: "15px", marginTop: "-5px"}}
				    />
				    
				  </div>

				  <div className="form-group" style = {{display: "flex", width : "344px"}}>
				    Login as User
				    <input type="radio" 
				           className="form-control"  
				           value = {type} 
				           onChange = {(e) => handleChange(e, "user") } 
				           name = "type"
				           style = {{width: "auto", marginLeft: "15px", marginTop: "-5px"}}
				    />
				  </div>
			  </div>
			  <button type="submit" className="btn btn-primary">Login</button>
			</form>
		</>
	)
}

export default Addtodo ;