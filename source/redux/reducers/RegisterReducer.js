import { REGISTER_SUCCESS, REGISTER_FAILURE, RESET_REGISTER } from "../actions/types";

const initialState = {
   isLoading: false,
   error: null
}

const registerReducer = (state=initialState, action)=>{
   switch(action.type){
      case REGISTER_SUCCESS:
         return {
            ...state,
            isLoading: true,
            error: null
         }
      case REGISTER_SUCCESS:
         return {
            ...state,
            isLoading: false
         }
      case REGISTER_FAILURE:
         return {
            ...state,
            isLoading: false,
            error: action.payload
         }
      case RESET_REGISTER:
         return initialState
      default:
         return state;
   }
}

export default registerReducer;