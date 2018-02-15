import React from 'react';

import { StyleProvider, Container, Content, Text, Spinner } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import colors from '../styles/colors';
import containers from '../styles/containers';
import PlacesAPI from '../utils/PlacesApi'
import ArrayUtils from '../utils/ArrayUtils'

export default class FindScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: []
        }
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;

        PlacesAPI.getPlaces().then((res) => {
            this.setState({
                places: ArrayUtils.shuffle(res.results).slice(0,3)
            });
        });
    }

    render() {
        this.state.places.map(place => console.log(place.name));

        if (this.state.places.length > 0) {
            return (
                <StyleProvider style={getTheme(material)}>
                    <Container style={containers.content}>
                        <Content>
                        </Content>
                    </Container>
                </StyleProvider>    
            );
        }

        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={containers.content}>
                    <Spinner color={colors.secondary} />
                </Container>
            </StyleProvider>
        );
    }
}