import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


/*
 This component is just going to show the details
 So we can make this as an functional component

props -> receving the props from parent
*/
const AlbumDetail = (props) => (
  // making use of the album props from parent
  <Card>
    <CardSection>
      <Text>{props.album.title}</Text>
    </CardSection>    
  </Card>
);


export default AlbumDetail;
