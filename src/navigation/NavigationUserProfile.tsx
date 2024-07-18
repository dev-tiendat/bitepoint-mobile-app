import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, PROPS, icons, images } from 'common';

const NavigationUserProfile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={PROPS.touchable_active_opacity}
        style={styles.profileContainer}>
        <Image source={images.avatar} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.nameText}>Phạm Tiến Đạt</Text>
          <Text style={styles.roleText}>Thu ngân</Text>
        </View>
        <Image source={icons.arrow_down} style={styles.arrowDownIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.netral_white,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10000,
  },
  content: {
    marginHorizontal: 12,
  },
  nameText: {
    ...FONTS.title3,
    color: COLORS.netral_black,
  },
  roleText: {
    ...FONTS.subtitle4,
    color: COLORS.netral600,
  },
  arrowDownIcon: {
    width: 20,
    height: 20,
  },
});

export default NavigationUserProfile;
