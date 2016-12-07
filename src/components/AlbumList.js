/*
AlbumList is extending Component class. In React we must declare before we use
any other components. So we must import "Component" from 'react' libaray.

We cant remove React from the import,its manily because babel need this. So here
when we destructure "Componet" we still import React.
*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

/*
 Gonna refactor our current functional code to class component.

 Whenever we define, class component it must defined render method which should
 return some JSX code.

 We need to fetch the data, when the app about to render.
 Class based components have a unique feature called "Life cycle methods".
 Basically, funcational components are like pipe - data goes in jsx come out. But
 class based components know when they are going to be render or removes from the
 view.

 Life cycle methods :
    these methods will called automatically
    componentWillMount() - this will automatically executed when this component
    render to the screen.
    componentDidMount()
*/
class AlbumList extends Component {

  componentDidMount() {
     /*
      This will be called when this component about to render on the screen
      we will be using Axios module to make http request
     */
     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => console.log(response));
  }
  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
