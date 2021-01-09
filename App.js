import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './components/Button';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import InternationalNews from './screens/InternationalNews'
import NationalNews from './screens/NationalNews'
import SportsPage from './screens/SportsPage'
import WeatherScreen from './screens/WeatherScreen'

export default class App extends Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
      HomeScreen : HomeScreen,
      InternationalNews : InternationalNews,
      NationalNews : NationalNews,
      SportsPage : SportsPage,
      WeatherScreen : WeatherScreen
      
});

const AppContainer = createAppContainer(AppNavigator);