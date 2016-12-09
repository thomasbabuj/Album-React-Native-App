import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


/*
 This component is just going to show the details
 So we can make this as an functional component

props -> receving the props from parent
destructing props into album

 Defining custom params for this button
 pressButton is a custom paramenter speific to this button

 using React's Linking API to open the url in the browser

*/
const AlbumDetail = ({ album }) => {
  // destructing  album into specific variables
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle,
          headerContainerStyle,
          thumbnailContainerStyle,
          headerTextStyle,
          imageStyle
        } = styles;

  console.log(image);

  return (
    // making use of the album props from parent
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
              source={{ uri: thumbnail_image }}
              style={thumbnailStyle}
          />
        </View>

        <View style={headerContainerStyle}>
          <Text style={headerTextStyle}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>

      </CardSection>

      <CardSection>
           <Image
               source={{ uri: image }}
               style={imageStyle}
           />
      </CardSection>

      <CardSection>
        <Button pressButton={() => Linking.openURL(url)}>
          Buy Now !
        </Button>
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
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flexGrow: 1,
    width: null
  }
};

export default AlbumDetail;
