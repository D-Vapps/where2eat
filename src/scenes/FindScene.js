import { API_KEY } from 'react-native-dotenv'
import React from 'react';
import { Text, View, Image } from 'react-native';

import text from '../styles/text.js';
import colors from '../styles/colors.js';
import containers from '../styles/containers.js';

export default class FindScene extends React.Component {
    render() {
        return (
            <View style={containers.content}>
                <Text style={text.data}>{API_KEY}</Text>
            </View>
        );
    }
}