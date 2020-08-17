import React, { useEffect } from 'react';
import Datatables from '../commonComponent/DataTables';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../stores/actions/action';
import { useHistory } from "react-router-dom";

const Todolist = (props) => {

	const history = useHistory();
    const style = {borderRadius: "31px", border: "none"}

	// To  Manage the State in the Component :-
	let {todos, userType} =  useSelector( state => state.User );

	// To dispatch an actions to the reducers :-
	const dispatchActions = useDispatch();

	const getData =  () => {
		 dispatchActions(getUser());
	}

	useEffect( () => {
		if(userType === 0){
			history.push("/");
		}
		getData();
	}, []);

	const openPopup = () => {
		props.history.push(`/adduser`);
	}

	return (
			<div  className = "card card-header" >
				<div style = {{textAlign: "end"}}>
					{ userType === 1 && <button className = "btn btn-primary" style = {style} onClick = {openPopup}>Add User</button>}
				</div>
				<div>
					<Datatables data = {todos} type = "todolist" />
				</div>
			</div>
		)
}

export default Todolist ;