// @ts-nocheck
import React, { useEffect } from "react";
import { View, Text, Button, CheckBox, ToastAndroid } from "react-native";
import { connect } from 'react-redux';
import { Formik } from "formik";
import CustomeTextInput from "../components/CustomeTextInput";
import Loading from "../components/Loading";
import {  validateRegister } from "../helper/validateYupSchema";
import { doRegister, resetregister } from "../redux/actions/RegisterAction";

const FormRegister = ({ _doRegister, _resetregister, register }) => {
	useEffect(() => {
		console.log("didmount or didUpdate FormRegister");
		return () => {
			console.log("unmount FormRegister");
			_resetregister();
		};
	}, []);
	return (
		<Formik
			initialValues={{
				name: 'Kistanto Test',
				email: "admin@admin.com",
				password: "12345",
				confirmPassword: "12345",
				isAgree: false
			}}
			onSubmit={(values, actions) => {
				_doRegister(values)
			}}
			validationSchema={validateRegister}
		>
			{formikProps => (
				<>
					<CustomeTextInput
						label="Name"
						nameTxtInput="name"
						formikProps={formikProps}
					/>
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
					<CustomeTextInput
						label="Confirm Password"
						nameTxtInput="confirmPassword"
						secureTextEntry
						formikProps={formikProps}
					/>

					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<CheckBox
							value={formikProps.values["isAgree"]}
							onValueChange={value => formikProps.setFieldValue("isAgree", value)}
						/>
						<Text>I Agree with terms and condtitions</Text>
					</View>

					<View style={{ marginVertical: 10 }}>
						<Button
							title="REGISTER"
							onPress={formikProps.handleSubmit}
						/>
					</View>
					{/* validate checklist is Agree */}
					{
						Object.keys(formikProps.errors).length === 1
						&& formikProps.errors['isAgree']
						&& formikProps.isSubmitting
						&& ToastAndroid.show(formikProps.errors['isAgree'], ToastAndroid.SHORT)
					}
					{register.isLoading && <Loading />}
					{register.error && <Text style={{ textAlign: 'center', color:'red'}} >{ register.error }</Text>}
				</>
			)}
		</Formik>
	);
};

const mapStateToProps = (state) => ({
	register : state.register
});
const mapDispatchToProps = (dispatch) => ({
	_doRegister  : data => dispatch(doRegister(data)),
	_resetregister: () => dispatch(resetregister())
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
