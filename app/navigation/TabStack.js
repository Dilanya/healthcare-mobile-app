import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntro from '../screens/AppIntro';
import WelcomeScreen from '../screens/welcomeScreen';
import ChatScreen from '../screens/chatScreen';
import auth from '@react-native-firebase/auth';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/loginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabActions } from '@react-navigation/routers';
import { Image,StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageScreen from '../screens/MessageScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
 

const ChatStack = () => {
    return (
        <Stack.Navigator >
         <Stack.Screen name="Message" component={MessageScreen} options={{
          headerShown: false,
        }}/>   
        <Stack.Screen name="Chat" component={ChatScreen} options={{
          headerShown: false,
        }}/> 
         </Stack.Navigator>
    );
  } 
  const ProfileStack = () => {
    return (
        <Stack.Navigator >
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          headerShown: false,
        }}/> 
         </Stack.Navigator>
    );
  } 
  const SettingsStack = () => {
    return (
        <Stack.Navigator >
        <Stack.Screen name="Settings" component={SettingsScreen} options={{
          headerShown: false,
        }}/> 
         </Stack.Navigator>
    );
  } 



  
  const Chats = "Chat";
  const Profiles = "Profile";
  const Settingss = "Settings";



const TabStack = () => {
    return(
<Tab.Navigator
  initialRouteName={Chats}
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let rn = route.name;

      if (rn === Chats) {
        iconName = focused ?   'chatbox-ellipses': 'chatbox-ellipses-outline';

      } else if (rn === Profiles) {
        iconName = focused ? 'person' : 'person-outline';

      } else if (rn === Settingss) {
        iconName = focused ? 'settings' : 'settings-outline';
      }

      
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: '#4B76AB',
    inactiveTintColor: 'grey',
    style: {
        backgroundColor: '#4B76AB' 
    },
    labelStyle: { paddingBottom: 10, fontSize: 10 },
    //style: { padding: 10, height: 70}
  }}
  >
  <Tab.Screen name="Chat" component={ChatStack} options={{
              headerShown: false ,
              tabBarShowLabel: false,}}/>
              
               
  <Tab.Screen name="Profile" component={ProfileStack} options={{
              headerShown: false,
              tabBarShowLabel: false
              }} />
  <Tab.Screen name="Settings" component={SettingsStack} options={{
              headerShown: false ,
              tabBarShowLabel: false,
              }} />

</Tab.Navigator>
)}

  export default TabStack;

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
