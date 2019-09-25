import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { _AuthStackScreen, SplashScreen } from './screen/auth';
import _DashboardBottmTab from './screen/dashboard';

// wrap all navigation
const rootNavigation = createSwitchNavigator({
   SPLASH      : SplashScreen,
   AUTH        : _AuthStackScreen,
   DASHBOARD   : _DashboardBottmTab
},{
   initialRouteName: 'SPLASH'
})

export default createAppContainer(rootNavigation);