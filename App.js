import React from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import text from './src/styles/text.js';
import colours from './src/styles/colors.js';
import containers from './src/styles/containers.js';
import WelcomeScene from './src/scenes/WelcomeScene.js';
import TimeScene from './src/scenes/TimeScene.js';
import RangeScene from './src/scenes/RangeScene.js';

const RootStack = StackNavigator(
  {
    Welcome: { screen: WelcomeScene },
    Time: { screen: TimeScene },
    Range: { screen: RangeScene }
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none'
  }
);

export default class Where2eat extends React.Component {
  render() {
    return <RootStack />;
  }
}