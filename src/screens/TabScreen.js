import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#48D1CC'}} hasTabs>
            <Left/>
          <Body style={{alignItems: 'center', justifyContent: 'center'}}>
            <Title style={{color:'white', }}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'#FAFAFA'}}>
          <Tab tabStyle={{backgroundColor:'#48D1CC'}} activeTabStyle={{backgroundColor:'#48D1CC'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#48D1CC'}} activeTabStyle={{backgroundColor:'#48D1CC'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#48D1CC'}} activeTabStyle={{backgroundColor:'#48D1CC'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}