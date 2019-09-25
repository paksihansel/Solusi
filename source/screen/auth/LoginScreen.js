import React from "react";
import { ScrollView } from "react-native";

import LogoLogin from "../../components/LogoLogin";
import FormLogin from "../../container/FormLogin";

const LoginScreen = () => (
	<ScrollView style={{ margin: 15 }} showsVerticalScrollIndicator={false}>
		<LogoLogin/>
		<FormLogin/>
	</ScrollView>
);

export default LoginScreen;

