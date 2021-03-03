import React, {Component} from 'react';
import {Text} from 'react-native';

export class MainText extends Component {
  render() {
    return (
      <Text style={{fontFamily: 'Quicksand-Regular'}}>
        {' '}
        {this.props.children}{' '}
      </Text>
    );
  }
}

export default MainText;
