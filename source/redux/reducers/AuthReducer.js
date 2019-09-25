import {
   SET_LOADING,
   LOGIN_SUCCESS,
   LOGIN_FAILURE,
   LOGOUT_SUCCESS
} from '../actions/types';

const initialState = {
   dataUser : {},
   isLoading: false,
   error: null
}

const authReducer = (state=initialState, action) => {
     switch(action.type){
        case SET_LOADING:{
           return {
              ...state,
              isLoading: true,
              error: null
           }
        }
        case LOGIN_SUCCESS :{
           return {
              ...state,
              isLoading: false,
              dataUser: action.payload
           }
        }
        case LOGIN_FAILURE :{
           return {
              ...state,
              isLoading: false,
              error: action.payload
           }
        }
        case LOGOUT_SUCCESS : {
           return {
              ...state,
              isLoading: false,
              dataUser: {},
           }
        }
        default:
         return state;
     }
}

export default authReducer;