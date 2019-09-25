import React, { Component } from 'react'
import Test from './src/screens/navigation'

const App = () => {
   return (
      <Test/>
   )
}
export default App;

/*import React from "react";
import { Provider } from "react-redux";
import store from "./source/redux/store";
import RootNavigation from "./source/rootNavigation";
import navigationServices from "./source/helper/navigationServices";

const App = () => (
	<Provider store={store}>
		<RootNavigation
			ref={navRef => navigationServices.setTopLevelNavigator(navRef)}
		/>
	</Provider>
);

export default App;*/