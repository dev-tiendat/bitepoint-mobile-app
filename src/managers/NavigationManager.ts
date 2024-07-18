import React from 'react';
import {
  BottomTabPressedEvent,
  BottomTabSelectedEvent,
  Navigation,
} from 'react-native-navigation';
import { icons, COLORS, FONTS } from 'common';
import {
  NavigationComponentId,
  NavigationComponentName,
  NavigationLayoutId,
} from 'common/navigation';
import HomeScreen from 'home/HomeScreen';
import OrderScreen from 'order/OrderScreen';
import CreateOrderScreenModal from 'menu/CreateOrderScreenModal';
import MoreModal from 'more/MoreModal';
import TableScreen from 'table/TableScreen';
import EmptyScreen from 'navigation/NavigationEmptyScreen';
import NavigationHeaderLogo from 'navigation/NavigationHeaderLogo';
import NavigationSearchBar from 'navigation/NavigationSearchBar';
import NavigationNotification from 'navigation/NavigationNotification';
import NavigationUserProfile from 'navigation/NavigationUserProfile';

export enum BottomTabIndex {
  HOME,
  ORDER,
  MENU,
  TABLE,
  MORE,
}

class NavigationManager {
  private _currentTabIndex: number;

  constructor() {
    this._currentTabIndex = 0;
  }

  initialize() {
    Navigation.setDefaultOptions({
      layout: {
        componentBackgroundColor: COLORS.backgroundPrimary,
        orientation: ['portrait', 'landscape'],
      },
      topBar: {
        height: 76,
        // largeTitle: {
        //   visible: true,
        //   fontSize: 20
        // },
        title: {
          component: {
            name: NavigationComponentName.NAVIGATION_SEARCH_BAR,
          },
        },
        leftButtons: [
          {
            component: {
              name: NavigationComponentName.NAVIGATION_HEADER_LOGO,
            },
            id: NavigationComponentId.NAVIGATION_HEADER_LOGO,
          },
        ],
        rightButtons: [
          {
            component: {
              name: NavigationComponentName.NAVIGATION_USER_PROFILE,
            },
            id: NavigationComponentId.NAVIGATION_USER_PROFILE,
          },
          {
            component: {
              name: NavigationComponentName.NAVIGATION_NOTIFICATION,
              passProps: {
                unreadNotificationNumber: 1,
              },
              id: NavigationComponentId.NAVIGATION_NOTIFICATION,
            },
            id: '',
          },
        ],
      },
    });
    Navigation.events().registerBottomTabSelectedListener(
      this._handleBottomTabSelected,
    );
    Navigation.events().registerBottomTabPressedListener(
      this._handleBottomTabPressed,
    );
  }

  registerScreens = () => {
    Navigation.registerComponent(
      NavigationComponentName.NAVIGATION_HEADER_LOGO,
      () => NavigationHeaderLogo,
    );
    Navigation.registerComponent(
      NavigationComponentName.NAVIGATION_SEARCH_BAR,
      () => NavigationSearchBar,
    );
    Navigation.registerComponent(
      NavigationComponentName.NAVIGATION_NOTIFICATION,
      () => NavigationNotification,
    );
    Navigation.registerComponent(
      NavigationComponentName.NAVIGATION_USER_PROFILE,
      () => NavigationUserProfile,
    );
    Navigation.registerComponent(
      NavigationComponentName.HOME_SCREEN,
      () => HomeScreen,
    );
    Navigation.registerComponent(
      NavigationComponentName.ORDER_SCREEN,
      () => OrderScreen,
    );
    Navigation.registerComponent(
      NavigationComponentName.CREATE_ORDER_MODAL,
      () => CreateOrderScreenModal,
    );
    Navigation.registerComponent(
      NavigationComponentName.TABLE_SCREEN,
      () => TableScreen,
    );
    Navigation.registerComponent(
      NavigationComponentName.MORE_MODAL,
      () => MoreModal,
    );
    Navigation.registerComponent(
      NavigationComponentName.EMPTY_SCREEN,
      () => EmptyScreen,
    );
  };

  selectTab = (tabIndex: number) => {
    if (this._currentTabIndex === tabIndex) {
      return;
    }

    Navigation.mergeOptions(NavigationLayoutId.BOTTOM_TABS, {
      bottomTabs: {
        currentTabIndex: tabIndex,
      },
    });
  };

  setMainRoot = async () => {
    await Navigation.setRoot({
      root: {
        bottomTabs: {
          id: NavigationLayoutId.BOTTOM_TABS,
          options: {
            bottomTabs: {
              animate: false,
              animateTabSelection: false,
              titleDisplayMode: 'showWhenActive',
              tabsAttachMode: 'onSwitchToTab',
              backgroundColor: COLORS.netral_white,
              shadow: {
                opacity: 0.9,
                color: '#00000014',
                radius: 2,
              },
            },
            bottomTab: {},
          },
          children: [
            {
              stack: {
                id: NavigationLayoutId.HOME_STACK,
                children: [
                  {
                    component: {
                      name: NavigationComponentName.HOME_SCREEN,
                      options: {
                        bottomTab: {
                          icon: icons.home,
                          text: 'Trang chủ',
                          fontSize: 14,
                          textColor: COLORS.netral600,
                          iconColor: COLORS.netral600,
                          selectedTextColor: COLORS.primary500,
                          selectedIconColor: COLORS.primary500,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                id: NavigationLayoutId.ORDER_STACK,
                children: [
                  {
                    component: {
                      name: NavigationComponentName.ORDER_SCREEN,
                      options: {
                        bottomTab: {
                          icon: icons.order,
                          text: 'Đơn hàng',
                          fontSize: 14,
                          textColor: COLORS.netral600,
                          iconColor: COLORS.netral600,
                          selectedTextColor: COLORS.primary500,
                          selectedIconColor: COLORS.primary500,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                id: NavigationLayoutId.MENU_STACK,
                children: [
                  {
                    component: {
                      name: NavigationComponentName.EMPTY_SCREEN,
                      options: {
                        bottomTab: {
                          icon: icons.create_order,
                          selectTabOnPress: false,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                id: NavigationLayoutId.TABLE_STACK,
                children: [
                  {
                    component: {
                      name: NavigationComponentName.TABLE_SCREEN,
                      options: {
                        bottomTab: {
                          icon: icons.table,
                          text: 'Bàn ăn',
                          fontSize: 14,
                          textColor: COLORS.netral600,
                          iconColor: COLORS.netral600,
                          selectedTextColor: COLORS.primary500,
                          selectedIconColor: COLORS.primary500,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                id: NavigationLayoutId.MORE_STACK,
                children: [
                  {
                    component: {
                      name: NavigationComponentName.EMPTY_SCREEN,
                      options: {
                        bottomTab: {
                          icon: icons.more,
                          text: 'Thêm',
                          fontSize: 14,
                          selectTabOnPress: false,
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  };

  _handleBottomTabSelected = ({ selectedTabIndex }: BottomTabSelectedEvent) => {
    this._currentTabIndex = selectedTabIndex;
  };

  _handleBottomTabPressed = ({ tabIndex }: BottomTabPressedEvent) => {
    const modalComponents: Record<number, string> = {
      [BottomTabIndex.MENU]: NavigationComponentName.CREATE_ORDER_MODAL,
      [BottomTabIndex.MORE]: NavigationComponentName.MORE_MODAL,
    };

    if (modalComponents[tabIndex]) {
      Navigation.showOverlay({
        component: {
          name: modalComponents[tabIndex],
        },
      });
      this.selectTab(this._currentTabIndex);
    }
  };
}

export default new NavigationManager();
