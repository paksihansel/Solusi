// @ts-nocheck
import React, { useEffect } from "react";
import {
  View,
  ImageBackground,
  ActivityIndicator,
  StatusBar
} from "react-native";
import { connect } from 'react-redux'
import { styles } from "../../styles";
import { cekAuth } from "../../redux/actions/AuthActions";

const SplashScreen = ({ _getToken }) => {
	useEffect(() => {
		_getToken();
	},[]);

  return (
		 <View style={styles.container}>
        <StatusBar hidden />
        <ImageBackground
          source={require("../../images/bg.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <ActivityIndicator
          size="large"
          animating
          style={{ position: "absolute" }}
        />
      </View>
	)
} 

const mapDispatchToProps = dispatch => ({
	_getToken : () => dispatch(cekAuth())
});
export default connect(null, mapDispatchToProps)(SplashScreen);