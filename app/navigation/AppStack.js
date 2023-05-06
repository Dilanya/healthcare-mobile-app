import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntro from '../screens/AppIntro';
import WelcomeScreen from '../screens/welcomeScreen';
import ChatScreen from '../screens/chatScreen';
import auth from '@react-native-firebase/auth';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/loginScreen';
import TabStack from './TabStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabActions } from '@react-navigation/routers';
import { Image,StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


    
const AppStack = () => {
    return (
      
        <Stack.Navigator >
  
        
        
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{
          headerShown: false,

        }}/>
        <Stack.Screen name="Tab" component={TabStack} options={{
          headerShown: false,

        }}/> 
          
        </Stack.Navigator>
        
        
        
      
    );
  }
  
  export default AppStack;

  const styles = StyleSheet.create({
  image : {
    height : 40,
    width : 40,
    marginRight : 20 },
  
  container : {
    height: 50,
    width: 60,
    color: '#A6C1CD'
  }
  
    })
