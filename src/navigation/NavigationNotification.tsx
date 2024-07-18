import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { COLORS, FONTS, icons } from 'common';
import { COMMON_STYLES, PROPS } from 'common/theme';
import { NavigationComponentId } from 'common/navigation';

type NavigationNotificationProps = {
  unreadNotificationNumber?: number;
};

const NotificationDropdown = () => {};

const NavigationNotification: NavigationFunctionComponent<
  NavigationNotificationProps
> = props => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleToggle = () => {
    setIsShow(!isShow);
    Navigation.updateProps(NavigationComponentId.NAVIGATION_NOTIFICATION, {
      unreadNotificationNumber: 3,
    });
  };
  console.log(props);

  const renderDropdown = () => {
    return <View style={styles.dropdownContainer}></View>;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.notificationBtn, isShow && styles.activeNotificationBtn]}
        activeOpacity={PROPS.touchable_active_opacity}
        onPress={handleToggle}>
        <Image source={icons.notification} style={styles.notificationIcon} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{props.unreadNotificationNumber}</Text>
        </View>
      </TouchableOpacity>
      {isShow && renderDropdown()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.netral_white,
  },
  notificationBtn: {
    padding: 12,
    backgroundColor: COLORS.netral_white,
    borderRadius: 8,
  },
  activeNotificationBtn: {
    backgroundColor: COLORS.netral100,
  },
  notificationIcon: {
    width: 20,
    height: 20,
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 16,
    height: 16,
    backgroundColor: COLORS.danger500,
    borderRadius: 100,
  },
  badgeText: {
    ...FONTS.title6,
    fontSize: 10,
    lineHeight: 12,
    color: COLORS.netral_white,
  },
  dropdownContainer: {
    position: 'absolute',
    bottom: -465,
    left: -265,
    width: 362,
    height: 464,
    backgroundColor: COLORS.netral_white,
    borderRadius: 12,
    ...COMMON_STYLES.shadow,
  },
});

export default NavigationNotification;
