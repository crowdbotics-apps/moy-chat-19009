import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed1282527Navigator from '../features/Feed1282527/navigator';
import SignUp2782526Navigator from '../features/SignUp2782526/navigator';
import EmailAuth682524Navigator from '../features/EmailAuth682524/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed1282527: { screen: Feed1282527Navigator },
SignUp2782526: { screen: SignUp2782526Navigator },
EmailAuth682524: { screen: EmailAuth682524Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
