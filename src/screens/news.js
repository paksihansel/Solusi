import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
import Tab6 from './tabs/tab6';



export default class TabsExample extends Component {
  static navigationOptions = {
    header: null,
  }

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
        <Tabs tabBarUnderlineStyle={{backgroundColor:'#FAFAFA'}}
          renderTabBar={()=> <ScrollableTab />}>
          <Tab tabStyle={{backgroundColor:'#48D1CC'}} activeTabStyle={{backgroundColor:'#48D1CC'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#48D1CC'}} activeTabStyle={{backgroundColor:'#48D1CC'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Bisinis">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#48D1CC'}} activeTabStyle={{backgroundColor:'#48D1CC'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Technology">
            <Tab3 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#48D1CC'}} activeTabStyle={{backgroundColor:'#48D1CC'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Kesehatan">
            <Tab4 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#48D1CC'}} activeTabStyle={{backgroundColor:'#48D1CC'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Olahraga">
            <Tab5 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#48D1CC'}} activeTabStyle={{backgroundColor:'#48D1CC'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Hiburan">
            <Tab6 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}