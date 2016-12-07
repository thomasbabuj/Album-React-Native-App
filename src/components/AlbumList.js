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

  //Step 1 : Set default or Initial state
  // only for the initialization we declare
  state = { albums: [] };

  componentDidMount() {
     /*
      This will be called when this component about to render on the screen
      we will be using Axios module to make http request.

      Issue :
      This request is an async request, so we dont know how long it will take
      for the response. So during that time, our screen is empty. So Basically we
      need to rerender our component to update the data.

      Using component level state, we can slove this issue. Using the state, React
      handles the component changes.

      How state works with React :

        3 Steps :
          1) Set defaults state
               Need to add class level property
          2) Update the state with latest value
               Using setState() to update the state
               This is the only way we can update the component state
          3) Re-render the component state

       Rules of state:

       Definition of state:
          A plain js object used to record and respond to user-triggered events.

        Whenever we need to update what a component shows, call "this.setState"

        Only change state with setState, do not do like this.state = 123

        Probs is to pass data between paratent to child communication
        State is to pass data for internel record keeping
     */

     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => this.setState({ albums: response.data }));
  }

  // Helper methods
  renderAlbums() {
    // using fat function inside albums map fuction
    return this.state.albums.map(album => <Text >{album.title}</Text>);
  }
  render() {
    /*
    When we console.log here the state, we see the state is logged
    twice. one is with empty album and the other one is with latest values
    from the remote url.

          console.log(this.state);
    */


    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
