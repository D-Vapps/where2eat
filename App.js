import React from 'react';
import { Text, View, Image } from 'react-native';

import text from './src/styles/text.js';
import colours from './src/styles/colors.js';
import containers from './src/styles/containers.js';

export default class Where2eat extends React.Component {
  render() {
    return (
        <View style={containers.content}>
          <Image style={{width: 300, height: 168}}
                source={require('./public/images/where2eat.png')} />
          <Text style={text.title}>On mange où ? osef.</Text>
        </View>
    )
  }
}