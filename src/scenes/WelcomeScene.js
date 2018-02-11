import React from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';

import text from '../styles/text.js';
import colors from '../styles/colors.js';
import containers from '../styles/containers.js';

export default class WelcomeScene extends React.Component {
  render() {
    return (
      <View style={containers.content}>
        <Image style={{width: 300, height: 168}}
               source={require('../../public/images/where2eat.png')} />
        <Text style={text.title}>On mange où ?</Text>
        <Text style={text.title}>Ça m'est égal !</Text>
        <ActivityIndicator size="large" style={{paddingTop: 24}} color={colors.secondary} />
      </View>
    );
  }
}
