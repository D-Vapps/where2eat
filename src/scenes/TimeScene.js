import React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';

import text from '../styles/text.js';
import colours from '../styles/colors.js';
import containers from '../styles/containers.js';

import DateTimePicker from 'react-native-modal-datetime-picker';

export default class TimeScene extends React.Component {

  constructor(props){
    super(props);
    let time;
  }

  state = {
  isDateTimePickerVisible: false,
};

_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

_handleDatePicked = (date) => {
  console.log('A date has been picked: ', date);
  this.time = date;
  this._hideDateTimePicker();
};

  render() {
    return (
      <View style={containers.content}>
      <Text style={text.questions}>A quelle heure souhaitez-vous manger?</Text>
      <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <Text style={text.questions}>Choisir</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            mode='time'
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Range', {
            time: this.time
          })}
          title="Suivant"
          color={colours.secondary}
        />
      </View>
    )
  }
}
