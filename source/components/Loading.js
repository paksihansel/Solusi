import React, { useEffect } from "react";
import { View, StyleSheet, Modal, ActivityIndicator } from "react-native";

const Loading = () => {
	useEffect(() => {
		console.log("didmount or didUpdate Loading");
		return () => {
			console.log("unmunt Loading");
		};
	}, []);

	return (
		<Modal
			transparent={true}
			animationType={"none"}
			visible={true}
			onRequestClose={() => {
				console.log("close modal");
			}}
		>
			<View style={styles.modalBackground}>
				<View style={styles.activityIndicatorWrapper}>
					<ActivityIndicator animating={true} size={"large"} />
				</View>
			</View>
		</Modal>
	);
};
export default Loading;

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-around",
		backgroundColor: "#00000040"
	},
	activityIndicatorWrapper: {
		// backgroundColor: "#FFFFFF",
		// height: 100,
		// width: 100,
		//borderRadius: 10,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around"
	}
});
