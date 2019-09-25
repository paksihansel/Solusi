import React from "react";
import { 
   ScrollView
} from "react-native";
import FormRegister from "../../container/FormRegister";

const RegisterScreen = () => (
   <ScrollView style={{ margin: 15 }} showsVerticalScrollIndicator={false}>
		<FormRegister/>
	</ScrollView>
   )
export default RegisterScreen;