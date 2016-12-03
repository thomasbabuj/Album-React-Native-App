// Index.ios.js -- Place code in here for iOS !!

// Step 1 - Import a library to help create a Component
/*
   using import destructing, we declare the React variable
   we will be using in our app.
   Eg, we are doing this to fix this 'Text' is not defined error
*/
import React from 'react';
import { AppRegistry, View } from 'react-native';

// we follow this syntax because, header.js is user defined which is different
// from the Npm modules.
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

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

 Props :
  Whenever we want some data to pass from parent to child component we use
  "Props" in React.

  By passing props, Header component value change

  The App component is a functional component. We can also have Class component.
  Functional Component :
    Static Data goes in, JSX comes out
    Traddtionally we use this for presentaion
    Cant handle fetching data
    Easy to write
  Class Component :
    used for dyanamic sources of data
    Handles any data that might change ( fetching data, user events etc ...)
    Knows when it gets erendered to the device (useful data fetching)
    More code to write
*/
const App = () => (
    <View>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
);

// Step 3 - Render it to the device
/* first parameter -> same name as our project
 second params -> return all the components avaiable for this app
 we must register atleast one component
*/

AppRegistry.registerComponent('albums', () => App);
