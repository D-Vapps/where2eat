import { StyleSheet } from 'react-native';

import colors from './colors.js'

const containers = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
    }
});

export default containers;