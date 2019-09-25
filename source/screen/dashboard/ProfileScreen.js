import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from 'react-redux';
import { styles } from "../../styles";
import { logoutRequest } from "../../redux/actions/AuthActions";
import Loading from "../../components/Loading";

const ProfileScreen = ({ dataUser, isLoading, _logOut }) => {
	return (
		<View style={styles.container}>
			<Text>ProfileScreen</Text>
			{dataUser["name"] && (
				<>
					<Text style={{ fontSize: 28 }}>{dataUser["name"]}</Text>
					<Text style={{ fontSize: 28 }}>{dataUser["email"]}</Text>
				</>
			)}
			<Button onPress={_logOut} title="LOGOUT" />
			{isLoading && <Loading/>}
		</View>
	);
};

const mapStateToProps = (state) => ({
	dataUser : state.auth.dataUser,
	isLoading : state.auth.isLoading
});
const mapDispatchToProps = (dispatch) => ({
	_logOut : () => dispatch(logoutRequest())
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);