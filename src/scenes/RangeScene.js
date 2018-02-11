import React from 'react';

import { Text, View, Image, Button, Slider } from 'react-native';


import text from '../styles/text.js';
import colours from '../styles/colors.js';
import containers from '../styles/containers.js';

// import {
//   MKSlider,
//   MKButton,
//   MKTouchable,
// } from 'react-native-material-kit';

export default class RangeScene extends React.Component {
    // const { params } = this.props.navigation.state;
    // console.log("RangeScene");
    // const time = params ? params.time : null;
    constructor(props){
      super(props);
      let time = this.props.navigation.state.params.time;
      this.range = 5;
    }

    getVal(val){
      this.range = val;
      console.log(this.range);
     }

      render() {
          return(
            <View style={containers.content}>
              <Text style={text.questions}>A quelle distance de vous?</Text>
              <Text style={text.answers}>{this.range} km</Text>

              <Slider style={{ width: 300 }}
               step={1}
               minimumValue={5}
               maximumValue={50}
               value={this.range}
               onValueChange={val => this.setState({ range: val })}
               onSlidingComplete={ val => this.getVal(val)}/>

              <Button
                  color={colours.secondary}
                  title="Lancer la recherche"
                  onPress = {() => this.props.navigation.navigate('Find', {
                    time: this.time,
                    range: this.range
                  })}
              />


            </View>
          )
      }
}
