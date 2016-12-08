import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


/*
 This component is just going to show the details
 So we can make this as an functional component

props -> receving the props from parent
destructing props into album
*/
const AlbumDetail = ({ album }) => {
  // destructing  album into specific variables
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, headerContainerStyle } = styles;

  return (
    // making use of the album props from parent
    <Card>
      <CardSection>
        <View>
          <Image
              source={{ uri: thumbnail_image }}
              style={thumbnailStyle}
          />
        </View>

        <View style={headerContainerStyle}>
          <Text>{ title }</Text>
          <Text>{ artist }</Text>
        </View>

      </CardSection>
    </Card>
  );
};

// Styeling
/*
   - flexDirection: column ( is the default position of elements )
   - Text Container
   - When using Image, we need to manually style the width and height
     otherwise we wont be able to see the image.
*/
const styles = {
  containerStyle: {

  },
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
