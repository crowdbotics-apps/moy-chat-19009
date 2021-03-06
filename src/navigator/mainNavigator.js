import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings82569Navigator from '../features/Settings82569/navigator';
import BlankScreen4282565Navigator from '../features/BlankScreen4282565/navigator';
import BlankScreen4382564Navigator from '../features/BlankScreen4382564/navigator';
import BlankScreen4482563Navigator from '../features/BlankScreen4482563/navigator';
import BlankScreen4582562Navigator from '../features/BlankScreen4582562/navigator';
import BlankScreen4682561Navigator from '../features/BlankScreen4682561/navigator';
import BlankScreen4782560Navigator from '../features/BlankScreen4782560/navigator';
import Add-Item3882557Navigator from '../features/Add-Item3882557/navigator';
import Messaging3482555Navigator from '../features/Messaging3482555/navigator';
import Camera2982551Navigator from '../features/Camera2982551/navigator';
import NotificationList2482548Navigator from '../features/NotificationList2482548/navigator';
import ArticleList1982540Navigator from '../features/ArticleList1982540/navigator';
import Dashboard11682536Navigator from '../features/Dashboard11682536/navigator';
import CalendarView1282534Navigator from '../features/CalendarView1282534/navigator';
import UserProfile882530Navigator from '../features/UserProfile882530/navigator';
import Feed1282527Navigator from '../features/Feed1282527/navigator';
import EmailAuth682524Navigator from '../features/EmailAuth682524/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings82569: { screen: Settings82569Navigator },
BlankScreen4282565: { screen: BlankScreen4282565Navigator },
BlankScreen4382564: { screen: BlankScreen4382564Navigator },
BlankScreen4482563: { screen: BlankScreen4482563Navigator },
BlankScreen4582562: { screen: BlankScreen4582562Navigator },
BlankScreen4682561: { screen: BlankScreen4682561Navigator },
BlankScreen4782560: { screen: BlankScreen4782560Navigator },
Add-Item3882557: { screen: Add-Item3882557Navigator },
Messaging3482555: { screen: Messaging3482555Navigator },
Camera2982551: { screen: Camera2982551Navigator },
NotificationList2482548: { screen: NotificationList2482548Navigator },
ArticleList1982540: { screen: ArticleList1982540Navigator },
Dashboard11682536: { screen: Dashboard11682536Navigator },
CalendarView1282534: { screen: CalendarView1282534Navigator },
UserProfile882530: { screen: UserProfile882530Navigator },
Feed1282527: { screen: Feed1282527Navigator },
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
