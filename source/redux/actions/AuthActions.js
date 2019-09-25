import {
   CEK_AUTH,
   SET_LOADING,
   LOGIN_SUCCESS,
   LOGIN_FAILURE,
   LOGOUT_SUCCESS
} from "./types";
import AsyncStorage from "@react-native-community/async-storage";
import navigationServices from "../../helper/navigationServices";
import { api } from "../../helper/myFetch";

export const cekAuth = () => async (dispatch) => {
   try {
      const USER_DATA = await AsyncStorage.getItem("@USER_DATA");
      if (USER_DATA) {
         dispatch({
            type: LOGIN_SUCCESS,
            payload: JSON.parse(USER_DATA)
         })
         navigationServices.navigate("DASHBOARD");
      } else {
         navigationServices.navigate("AUTH");
      }
   } catch (error) {
      navigationServices.navigate("AUTH");
   }
}

export const loginRequest = (email, password) => async (dispatch) => {
   dispatch({ type: SET_LOADING });

   let response = await api({
      body: JSON.stringify({ action:'login', email, password })
   });

   if (response['error'] || !parseInt(response['isSuccess'] || 0)) {
      dispatch({
         type: LOGIN_FAILURE,
         payload: response['error'] || response['isMessage']
      })
   } else {
      const { name } = response;
      AsyncStorage.setItem("@USER_DATA", JSON.stringify({ email, name }));
      dispatch({
         type: LOGIN_SUCCESS,
         payload: { email, name }
      });
      navigationServices.navigate("DASHBOARD");
   }
}

export const logoutRequest = () => async (dispatch) => {
   dispatch({ type: SET_LOADING });
   await setTimeout(async () => {
      try {
         await AsyncStorage.removeItem("@USER_DATA");
      } catch (error) {
         alert(error)
      } finally {
         dispatch({ type: LOGOUT_SUCCESS })
         navigationServices.navigate("AUTH");
      }
   }, 2000)
}