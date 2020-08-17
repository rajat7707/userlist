import { ADD_USER, GET_USER, LOGIN_AS } from './actionsType';

// Get Todo :- 
export const asyncGetUser = () => {
	return {
		type    : GET_USER,
		loading : false,
	}
}


export const getUser = (todoData) => {
	return (dispatch) => {
		dispatch(asyncGetUser()); 
	}
}
// End of Get Todo

// Add Todo :- 
const asyncAddUser = (todoData, addType) => {
		return{
			loading :  false,
			payload : todoData,
			type    : ADD_USER,
			addType : addType
		}
}

export const addUser = (data) => {
	return (dispatch) => {
		dispatch(asyncAddUser(data, data.addType));
	}
}
// End of Add Todo


// Add Todo :- 
const asyncLoginType = (type) => {
		return{
			addType : type,
			type    : LOGIN_AS,
		}
}

export const loginAs = (type) => {
	return (dispatch) => { 
		dispatch(asyncLoginType(type));
	}
}
