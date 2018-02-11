import { GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT } from 'react-native-dotenv'
import React from 'react';
import { Text, View, Image } from 'react-native';

import text from '../styles/text.js';
import colors from '../styles/colors.js';
import containers from '../styles/containers.js';

export default class FindScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    render() {
        const { params } = this.props.navigation.state;
        let date = new Date();
        const time = params ? params.time : { action: null, hour: date.getHours(), minute: date.getMinutes() };
        const range = params ? params.range : 5;
        
        console.log(time);
        if (this.state.isLoading) {
            return (
                <View style={containers.content}>
                    <Text style={text.data}></Text>
                    <ActivityIndicator size="large" style={{paddingTop: 24}} color={colors.secondary} />
                </View>
            );
        }

        return (
            <StyleProvider  style={getTheme()}>
                <Container>
                    <Content>
                    </Content>
                </Container>
            </StyleProvider>    
        );
    }
}