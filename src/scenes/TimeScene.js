import React from 'react';
import { Text, View, Image } from 'react-native';

import text from '../styles/text.js';
import colours from '../styles/colors.js';
import containers from '../styles/containers.js';

export default class TimeScene extends React.Component {
  render() {
    return (
      <View style={containers.content}>
        <Text style={text.subTitle}>Fuck u</Text>
      </View>
    )
  }
}
