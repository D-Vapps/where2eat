import React from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import text from './src/styles/text.js';
import colours from './src/styles/colors.js';
import containers from './src/styles/containers.js';
import WelcomeScene from './src/scenes/WelcomeScene.js';
import TimeScene from './src/scenes/TimeScene.js';

const Where2eat = StackNavigator({
  Welcome: { screen: WelcomeScene },

});
