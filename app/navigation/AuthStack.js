import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntro from '../screens/AppIntro';
import WelcomeScreen from '../screens/welcomeScreen';
import ChatScreen from '../screens/chatScreen';
import auth from '@react-native-firebase/auth';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    
    
    return (
      
        <Stack.Navigator >
        
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false,
        }}/>
        
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{
          headerShown: false,
        }}/>
        
            
        </Stack.Navigator>
      
    );
  }  

  export default AuthStack;