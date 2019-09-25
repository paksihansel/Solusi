import React, { Component } from 'react';
import { Loading } from '../components/common/';
import Auth from './Auth';
import LoggedIn from './LoggedIn';
import deviceStorage from '../service/devicestorage';

export default class login extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true
    }

    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading size={'large'} />
       );
    } else if (!this.state.jwt) {
      return (
        <Auth newJWT={this.newJWT} />
      );
    } else if (this.state.jwt) {
      return (
        <LoggedIn jwt={this.state.jwt} deleteJWT={this.deleteJWT} />
      );
    }
  }
}
