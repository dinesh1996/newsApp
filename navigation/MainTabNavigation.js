import React from "react";
import {
  createAppContainer
} from "react-navigation";
import {
  createStackNavigator
} from "react-navigation-stack";
import {
  createMaterialBottomTabNavigator
} from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ZoomNewsScreen from '../screens/ZoomNewsScreen'

const HomesNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  ZoomNews: {
    screen: ZoomNewsScreen
  }
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#ffff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
});
const tabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomesNavigation,
    navigationOptions: {
      tabBarLabel: "Accueil",
      tabBarIcon: ({
        tintColor
      }) => ( <
        Icon name = {
          "ios-home"
        }
        size = {
          25
        }
        color = {
          tintColor
        }
        />
      ),
      barStyle: {
        backgroundColor: "#694fad"
      }
    }
  },


  Setting: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: "Réglage",
      tabBarIcon: ({
        tintColor
      }) => ( <
        Icon color = {
          tintColor
        }
        size = {
          25
        }
        name = {
          "ios-settings"
        }
        />
      ),
      barStyle: {
        backgroundColor: "blue"
      }
    }
  }
}, {
  initialRouteName: "Home"
});

export default createAppContainer(tabNavigator);