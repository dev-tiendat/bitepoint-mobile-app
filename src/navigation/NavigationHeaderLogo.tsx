import { images } from 'common';
import { PROPS } from 'common/theme';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

type NavigationHeaderProps = {
  goToHomeDisable?: boolean;
};

const NavigationHeaderLogo: NavigationFunctionComponent<
  NavigationHeaderProps
> = props => {
  const handlePress = () => {

  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={props.goToHomeDisable}
        activeOpacity={PROPS.touchable_active_opacity}
        onPress={handlePress}>
        <Image source={images.logo} style={styles.headerButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  headerButtonImage: {
    height: 45,
    aspectRatio: 300 / 88,
  },
});

export default NavigationHeaderLogo;
