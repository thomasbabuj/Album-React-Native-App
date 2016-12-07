import React from 'react';
import { View } from 'react-native';

// Function component
// Using props to receive props from parent

/*
 In order to pass component as props
   Step 1 ) Find the component we want to wrap inside the component
                - for our example, AlbumDetail so in AlbumDetail component we
                remove the Text and change to Card.
        2)  by including props.children, will contains the component which we
        want to pass from AlbumDetail

*/
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

// Adding Styling for Card Component
const styles = {

  containerStyle: {
    /* Borders */
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    /* Shadow */
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 1,

    /*
    Margin
    */
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
