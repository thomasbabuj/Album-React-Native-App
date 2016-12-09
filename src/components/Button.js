import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/*
 To add Touch event, we can TouchableOpacity or other types of Touch components

 To add click event, can use onPress params

 In order to make the button component resuable we are not going to implement
 common
*/
const Button = ({ pressButton, children }) => {

  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
        style={buttonStyle}
        onPress={pressButton}
    >
      <Text style={textStyle}>
        { children }
      </Text>
    </TouchableOpacity>
  );
};

// Button Styling
const styles = {
  /*Button Text Style */
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
