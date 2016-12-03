// Step 1 - Import libararies for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Step 2 - Making a component
/*
  This is a fat-arrow function, and standard partice is if there is only one
  return value then we dont use () and place return statment in the first line.
*/
const Header = () => {
  // using destructing to refer our styles

  const { textStyle, viewStyle } = styles;

  // the style here is a Prop (property)
  // use View tag to position our elements in the screen
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

/*
 we create new object for styles below our component,
 justifyContent and alignItems are both property we used to position our elements
 justifyContent: (move the element up and down)
          'flex-end' => appear on bottom
          'center',
          'flex-start' => appears on top
 alignItems :
          'start'
          'center',
          'end'
*/
const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Step 3 - Make the component available to other parts of the app
/*
  Only the 'root' component uses 'AppRegistry', in our case "App" is the root
  component and rest of the component which we create are child components.

  So export these components using es6 syntax.,

  the below line means, take the components and this component must available
  in our probject other files


*/
export default Header;
