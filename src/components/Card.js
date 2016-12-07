import React from 'react';
import { View } from 'react-native';

// Function component
const Card = () => {
  return (
    <View style={styles.containerStyle} />
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
