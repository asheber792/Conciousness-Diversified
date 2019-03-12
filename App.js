import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {createSwitchNavigator, 
  createBottomTabNavigator, 
  createMaterialTopTabNavigator,
  createAppContainer, 
  createStackNavigator
} from "react-navigation"

import Home from './Components/Home'
import Information from './Components/Information'
import JournalEntries from './Components/JournalEntries'
import Login from './Components/Login'
import Registration from './Components/Registration'
import JournalEntry from './Components/JournalEntry'
import NewJournalEntry from './Components/NewJournalEntry'
import EditJournalEntry from './Components/EditJournalEntry'
import LucidDreamingInfo from './Components/LucidDreamingInfo'
import MeditationInfo from './Components/MeditationInfo'
import BinauralBeatsInfo from './Components/BinauralBeatsInfo'
import SensoryDeprivationInfo from './Components/SensoryDeprivationInfo'

const ActivityNavigator = createStackNavigator({
  JournalEntries: JournalEntries, 
  JournalEntry: JournalEntry, 
  NewJournalEntry: NewJournalEntry,
  EditJournalEntry: EditJournalEntry,
},
{
  initialRouteName: "JournalEntries",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#824ff3',
    },
    headerTintColor: '#fff',
  }
})

const InfoNavigator = createStackNavigator({
  Information: Information, 
  LucidDreaming: LucidDreamingInfo, 
  Meditation: MeditationInfo, 
  BinauralBeats: BinauralBeatsInfo, 
  SensoryDeprivation: SensoryDeprivationInfo
},
{
  initialRouteName: "Information",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#824ff3',
    },
    headerTintColor: '#fff',
  }
})

const MainNavigator = createSwitchNavigator({
  Home: Home,
  UserAccount: {
    screen: createMaterialTopTabNavigator ({
      "Log In": Login,
      "Registration": Registration
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 16,
          color: 'white',
          fontWeight: 'bold'
        },
        tabStyle: {
          backgroundColor: '#824ff3',
          paddingTop: StatusBar.currentHeight
        }
      }
    })
  },
  Main: {
    screen: createBottomTabNavigator({
      "Info/Techniques": InfoNavigator, 
      "Experience Journal": ActivityNavigator
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 16,
          color: 'white',
          fontWeight: 'bold'
        },
        tabStyle: {
          backgroundColor: '#824ff3',
          border: 'black'
        }
      }
    }),
  }
},
{
  initialRouteName: "Home"
})



const App = createAppContainer(MainNavigator)
export default App
