import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

const CreateOrderScreenModal: NavigationFunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}></View>
    </View>
  );
};

CreateOrderScreenModal.options = props => {
  return {
    overlay: {
      interceptTouchOutside: true,
    },
    layout: {
      componentBackgroundColor: 'transparent',
    },
  };
};

export default CreateOrderScreenModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modal: {
    backgroundColor: '#ffffff',
    width: '70%',
    height: 500,
    borderRadius: 12,
  },
});
