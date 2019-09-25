// @ts-nocheck
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { connect } from 'react-redux';
import { Formik } from "formik";
import CustomeTextInput from "../components/CustomeTextInput";
import navigationServices from "../helper/navigationServices";
import Loading from "../components/Loading";
import { validateLogin } from "../helper/validateYupSchema";
import { loginRequest } from "../redux/actions/AuthActions";

const FormLogin = ({ _doLogin, auth }) => {
	useEffect(() => {
		console.log("didmount or didUpdate FormLogin");
		return () => {
			console.log("unmount Formlogin");
		};
	}, []);
	return (
		<Formik
			initialValues={{
				email: "admin@admin.com",
				password: "12345"
			}}
			onSubmit={(values, actions) => {
				_doLogin(values.email, values.password)
			}}
			validationSchema={validateLogin}
		>
			{formikProps => (
				<>
					<CustomeTextInput
						label="Email"
						nameTxtInput="email"
						keyboardType="email-address"
						formikProps={formikProps}
					/>
					<CustomeTextInput
						label="Password"
						nameTxtInput="password"
						secureTextEntry
						formikProps={formikProps}
					/>

					<View style={{ marginVertical: 10 }}>
						<Button
							title="LOGIN"
							onPress={formikProps.handleSubmit}
						/>
					</View>
					<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
						<TouchableOpacity>
							<Text
								style={{ color: "steelblue", fontSize: 16, fontStyle: "italic" }}
							>{`Lupa Password ?`}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigationServices.navigate("REGISTER")}>
							<Text
								style={{ color: "steelblue", fontSize: 16, fontStyle: "italic" }}
							>{`Register`}</Text>
						</TouchableOpacity>
					</View>

					{auth.isLoading && <Loading />}
					{auth.error && <Text style={{ textAlign: 'center', color:'red'}} >{ auth.error }</Text>}
				</>
			)}
		</Formik>
	);
};

const mapStateToProps = (state) => ({
	auth : state.auth
});
const mapDispatchToProps = (dispatch) => ({
	_doLogin  : (email, password) => dispatch(loginRequest(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);