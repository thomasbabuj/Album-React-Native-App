/*
AlbumList is extending Component class. In React we must declare before we use
any other components. So we must import "Component" from 'react' libaray.

We cant remove React from the import,its manily because babel need this. So here
when we destructure "Componet" we still import React.
*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';

/*
 Gonna refactor our current functional code to class component.

 Whenever we define, class component it must defined render method which should
 return some JSX code.
*/
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
