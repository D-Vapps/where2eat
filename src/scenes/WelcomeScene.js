import React from 'react';
import { Image } from 'react-native';
import { StyleProvider, Container, Content, Text, Spinner } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import text from '../styles/text.js';
import colors from '../styles/colors.js';
import containers from '../styles/containers.js';

export default class WelcomeScene extends React.Component {
  render() {
    setTimeout(() => {
      this.props.navigation.navigate('Time');
    }, 2000);

    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={containers.content}>
          <Image style={{width: 300, height: 168}} source={require('../../public/images/where2eat.png')} />
          <Text style={text.title}>On mange où ?</Text>
          <Text style={text.title}>Ça m'est égal !</Text> 
          <Spinner size="large" style={{paddingTop: 24}} color={colors.secondary} />
        </Container>
      </StyleProvider>
    );
  }
}
