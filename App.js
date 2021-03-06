import React from 'react';
import { StackNavigator } from 'react-navigation';

import WelcomeScene from './src/scenes/WelcomeScene.js';
import TimeScene from './src/scenes/TimeScene.js';
import RangeScene from './src/scenes/RangeScene.js';
import FindScene from './src/scenes/FindScene.js';
import InfosPlaceScene from './src/scenes/InfosPlaceScene.js';

const RootStack = StackNavigator(
  {
    Welcome: { screen: WelcomeScene },
    Time: { screen: TimeScene },
    Range: { screen: RangeScene },
    Find: { screen: FindScene },
    InfosPlace: { screen: InfosPlaceScene }
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