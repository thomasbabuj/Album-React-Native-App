// Index.ios.js -- Place code in here for iOS !!

// Step 1 - Import a library to help create a Component
/*
   using import destructing, we declare the React variable
   we will be using in our app.
   Eg, we are doing this to fix this 'Text' is not defined error
*/
import React from 'react';
import { AppRegistry } from 'react-native';

// we follow this syntax because, header.js is user defined which is different
// from the Npm modules.
import Header from './src/components/header';

// Step 2 - Create a Component
// A component is a javascript function
// returns some amount of JSX
/*
 Error : Unexpected block statement surrounding arrow body
 this means, we can fix this by removing the braces and return statement.
 this is because, in this app function we are only returning an single object,
 so we dont need to put return statement and the curly braces.

 component nesting, is the process of placing one component inside the another,
 its a two step process,
   step 1 , import the header into the App components
   step 2,  nest inside the App
*/
const App = () => (
    <Header />
);

// Step 3 - Render it to the device
/* first parameter -> same name as our project
 second params -> return all the components avaiable for this app
 we must register atleast one component
*/

AppRegistry.registerComponent('albums', () => App);
