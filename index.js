import { Navigation } from 'react-native-navigation';
import NavigationManager from './src/managers/NavigationManager';

NavigationManager.initialize();
NavigationManager.registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  NavigationManager.setMainRoot();
});
