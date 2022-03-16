import React from "react";
import HomeScreen from "./screens/Home";
import RecommendationScreen from './screens/recommendation'
import PopularMovieScreen from "./screens/popular";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {createMaterialTopTabNavigator} from "react-navigation-stack"
import { RFValue } from "react-native-responsive-fontsize";


export default function App() {
  return <AppContainer />;
}

const appTopNavigation = createMaterialTopTabNavigator({
  recommededMovies:{
    screen:RecommendationScreen,
    navigationOption:{
      tabStyle:{backgroundColor:"#fff"},
      labelStyle:{color:"#fff"},
      indicatorStyle:{backgroundColor:"#000"}
    }
  },
  PopularMovies:{
    screen:PopularMovieScreen,
    navigationOption:{
      tabStyle:{backgroundColor:"#fff"},
      labelStyle:{color:"#fff"},
      indicatorStyle:{backgroundColor:"#000"}
    }
  }
})

const AppStacknavigator=createSwitchNavigator({
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        headerShown:false
      }
    },
    appTopnav:{
      
        screen:appTopNavigation,
        navigationOption:{
          headerbacktitle:null,
          headertintColor:"#fff",
          headerTitle: "Recommended Movies",
          headerStyle:{backgroundColor:"#500f9"},
          headerStyle:{backgroundColor:"#d500f9"}
        },
        headerTitleStyle:{
          color:"#fff",
          fontWeight:Bold,
          RFValue:80
        }
      }
    },
  {
    initialRouteName:"Home"
  }
)

const AppContainer=createAppContainer(AppStacknavigator)
