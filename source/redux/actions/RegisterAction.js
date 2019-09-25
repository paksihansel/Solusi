import { REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS, LOGIN_SUCCESS, RESET_REGISTER } from "./types";
import { api } from "../../helper/myFetch";
import { ToastAndroid } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import navigationServices from "../../helper/navigationServices";

export const doRegister = (data) => async(dispatch) => {
   dispatch({ type: REGISTER_REQUEST });

   let response = await api({
      body: JSON.stringify({ action:'register', ...data })
   });

   if (response['error'] || !parseInt(response['isSuccess'] || 0)) {
      dispatch({
         type: REGISTER_FAILURE,
         payload: response['error'] || response['isMessage']
      })
   } else {
      const { name, email, isMessage } = response;
      await AsyncStorage.setItem("@USER_DATA", JSON.stringify({ email, name }));
      ToastAndroid.show(isMessage, ToastAndroid.LONG);
      dispatch({ type: REGISTER_SUCCESS });
      dispatch({
         type: LOGIN_SUCCESS,
         payload: { email, name }
      });
      navigationServices.navigate("DASHBOARD");
   }
}

export const resetregister = () => ({
   type: RESET_REGISTER
})