import React from 'react';
import { View, Text } from 'react-native';


/*
 This component is just going to show the details
 So we can make this as an functional component

props -> receving the props from parent
*/
const AlbumDetail = (props) => (
  // making use of the album props from parent
  <View>
    <Text>{props.album.title}</Text>
  </View>
);


export default AlbumDetail;
