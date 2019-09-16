import React, {Component} from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator, NavigationAction } from 'react-navigation';


import Login from './login';
import Home from './Home';
import News from './news';
import Profile from './profile';
import Inbox from './inbox';
import Task from './Task';
import SubTask from './subtask';
import Cuti from './cuti';
import ProfileUser from './profiluser';
import Gaji from './slipgaji';
import Peminjaman from './peminjaman';
import TimSaya from './timsaya';
import InfoAkun from './InfoAkun';
import Setting from './setting';
import VisiMisi from './visimisi';
import About from './about';
import Rpassword from './r_password';











const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
    News: {
      screen: News,
    },
    Profile:{
      screen: Profile,
    },
    Inbox: {
      screen: Inbox,
    },
    Task: {
      screen: Task,
    },
    SubTask: {
      screen: SubTask,
    },
    Cuti: {
      screen: Cuti,
    },
    ProfileUser: {
      screen: ProfileUser,
    },
    Gaji: {
      screen: Gaji,
    },
    Peminjaman: {
      screen: Peminjaman,
    },
    TimSaya: {
      screen: TimSaya,
    },
    InfoAkun: {
      screen: InfoAkun,
    },
    Setting: {
      screen: Setting,
    },
    VisiMisi: {
      screen: VisiMisi,
    },
    About: {
      screen: About,
    },
    Rpassword: {
      screen: Rpassword,
    }
  },
  
  {
    initialRouteName: 'Login',
    headerMode: null  
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}