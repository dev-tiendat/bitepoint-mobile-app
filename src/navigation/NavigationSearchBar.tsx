import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { COLORS, FONTS, SIZES, icons } from 'common';
import { PROPS } from 'common/theme';

const NavigationSearchBar: NavigationFunctionComponent = () => {
  const handlePress = () => {};

  return (
    <TouchableOpacity
      activeOpacity={PROPS.touchable_active_opacity}
      style={styles.container}
      onPress={handlePress}>
      <Image source={icons.search} style={styles.searchIcon} />
      <Text style={styles.searchText}>Tìm kiếm</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 355,
    height: 37,
    backgroundColor: COLORS.netral100,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginHorizontal: SIZES.radius,
    width: 18,
    height: 18,
    tintColor: COLORS.netral_black,
  },
  searchText: {
    ...FONTS.body4,
    color: COLORS.netral500,
  },
});

export default NavigationSearchBar;
