import { ADD_USER, GET_USER, LOGIN_AS } from '../actions/actionsType';

const initialState = {
	todos : [],
	payload : {},
	userType : 0,
}

const  userReducers = (state = initialState, action) => {

	switch(action.type){

		case GET_USER : 
			return {
				...state,
				todos : state.todos,
			}
		
		
		case ADD_USER :
			return {
				...state,
				todos : [ ...state.todos, action.payload ],
			}

		case LOGIN_AS :
			return {
				...state,
				todos : state.todos,
				userType : action.addType,
			}		
		
		default :
			return state;
				
	}
}

export default userReducers ;