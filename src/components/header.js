// Step 1 - Import libararies for making a component
import React from 'react';
import { Text } from 'react-native';

// Step 2 - Making a component
/*
  This is a fat-arrow function, and standard partice is if there is only one
  return value then we dont use () and place return statment in the first line.
*/
const Header = () => {
  return <Text>Albums!</Text>;
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
