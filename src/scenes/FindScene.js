import { GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT } from 'react-native-dotenv'
import React from 'react';

import { StyleProvider, Container, Content, Text, Spinner } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

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
                <StyleProvider style={getTheme(material)}>
                    <Container style={containers.content}>
                        <Spinner color={colors.secondary} />
                    </Container>
                </StyleProvider>
            );
        }

        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={containers.content}>
                    <Content>
                    </Content>
                </Container>
            </StyleProvider>    
        );
    }
}