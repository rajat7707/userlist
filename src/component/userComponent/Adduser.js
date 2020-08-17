import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../stores/actions/action';
import Popup from './Adduserpopup';
import { useHistory } from "react-router-dom";

const Addtodo = (props) => {

	const history = useHistory();
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [id, setId] = useState("");
	const [error, setError] = useState(false);
	const [errorMsg , setErrorMsg] = useState("");
	const [show , setShow] = useState("");

	// To  Manage the State in the Component :-
	let { userType} =  useSelector( state => state.User );

	useEffect( () => {
		if(userType === 0){
			history.push("/");
		}
	}, []);

	// Use to dispatch an action to the reducer :-
	const dispatchAction = useDispatch();

	const popupStatus = () => {
		setShow(!show);
	}

	const submitUser = (e) => {
		e.preventDefault();
		if(name === "" || address === "" || phone === ""){
			setError(true);
			setErrorMsg("Fields are required");
			return false ;
		}
		dispatchAction(addUser({ id : (new Date()).getTime(), name : name, phone : phone, address : address }));
		setShow(true);
		setName("");	
		setPhone("");
		setAddress("");
		setErrorMsg(true);
	}

	const handleChange = (e, type) => {

		if(type === "name"){
			setName(e.target.value);
		}else if(type === "phone"){
			setPhone(e.target.value);
		}else if(type === "address"){
			setAddress(e.target.value);
		}
	}

	return (
		<>
			{show && <Popup pop = {popupStatus} />}
			<form onSubmit = {submitUser} className = "card card-header" style = {{textAlign: "initial"}}>
			  <div className="form-group">
			    <label htmlFor="email">Email address:</label>
			    <input 
			        type="text" 
			        className="form-control" 
			        value = {name} 
			        onChange = {(e) => handleChange(e, "name") }
			    	placeholder="Enter Username" 
			    	id="email" 
			    />
			    {error && name === "" && <span style = {{color : "red"}}>{errorMsg}</span>}
			  </div>
			  <div className="form-group">
			    <label htmlFor="pwd">Phone:</label>
			    <input type="number" 
			           className="form-control"  
			           value = {phone} 
			           onChange = {(e) => handleChange(e, "phone") }
			           placeholder="Enter Phone Number" 
			           id="pwd" 
			    />
			    {error && phone === "" && <span style = {{color : "red"}}>{errorMsg}</span>}
			  </div>
			  <div className="form-group">
			    <label htmlFor="pwd">Address:</label>
			    <input type="text" 
			           className="form-control"  
			           value = {address} 
			           onChange = {(e) => handleChange(e, "address") }
			           placeholder="Enter Address" 
			           id="pwd" 
			    />
			    {error && address === "" && <span style = {{color : "red"}}>{errorMsg}</span>}
			  </div>
			  <button type="submit" className="btn btn-primary">Add User</button>
			</form>
		</>
	)
}

export default Addtodo ;