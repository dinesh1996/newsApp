import React from "react";
import {
  createAppContainer
} from "react-navigation";
import {
  createMaterialBottomTabNavigator
} from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";


const tabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
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