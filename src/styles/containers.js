import { StyleSheet } from 'react-native';

import colours from './colors.js'

const containers = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colours.primary,
    alignItems: 'center',
    justifyContent: 'center'
    }
});

export default containers;