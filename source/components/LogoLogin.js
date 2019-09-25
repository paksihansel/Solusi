// @ts-nocheck
import React from "react";
import { View, Text, Image } from "react-native";

const LogoLogin = () => (
	<View style={{ alignItems: 'center', justifyContent: "center"}}>
		<Image
			source={require("../images/react.png")}
			style={{ width: 200, height: 200 }}
		/>
		<Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
			{`SIMPLE APP WITH REDUX`}
		</Text>
	</View>
);
export default LogoLogin;

