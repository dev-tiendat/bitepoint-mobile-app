import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import NavigationManager from 'managers/NavigationManager';

const CreateOrderScreenModal = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          width: 40,
          height: 40,
        }}
      />
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
    lineHeight: '150%',
    width: '70%',
    height: 500,
    borderRadius: 12,
  },
});
