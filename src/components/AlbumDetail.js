import React from 'react';
import { Text } from 'react-native';
import Card from './Card';


/*
 This component is just going to show the details
 So we can make this as an functional component

props -> receving the props from parent
*/
const AlbumDetail = (props) => (
  // making use of the album props from parent
  <Card>
    <Text>{props.album.title}</Text>
  </Card>
);


export default AlbumDetail;
