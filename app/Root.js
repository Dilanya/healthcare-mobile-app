import {useEffect, useState} from 'react';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Providers from "./navigation/index";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntro from './screens/AppIntro';
import WelcomeScreen from './screens/welcomeScreen';
import ChatScreen from './screens/chatScreen';
import auth from '@react-native-firebase/auth';
import LoginScreen from './screens/loginScreen';
import SignUpScreen from './screens/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './navigation/AuthProvider';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import TabStack from './navigation/TabStack';



const Stack = createNativeStackNavigator();


const App =() => {

  const [isFirstLaunch, setIsFirstLaunch]  = React.useState(null);
  const [user,setUser] = useState(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
    
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    
  },[]);

  //if (initializing) return null;

  useEffect(() =>{
      AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value === null){
          AsyncStorage.setItem('alreadyLaunched','true');
          setIsFirstLaunch(true);}
      else{
          setIsFirstLaunch(false)
          }
      });
      GoogleSignin.configure({
        webClientId : '561041620556-o1ggd77hfrp8vq3dfkhoion62t10hvnb.apps.googleusercontent.com'
      });
  },[]);
  
  useEffect(() => {
    setTimeout(() => {
     SplashScreen.hide();
    },2000)
  } ,[]);

  
  if(isFirstLaunch === false){
    
    
      return (
    <AuthProvider>
    <NavigationContainer> 
         {user ? <AppStack />  && <TabStack/>: <AuthStack/>}
    </NavigationContainer>
    </AuthProvider>
    )
    

      }else (isFirstLaunch === true); {
    
    return (
    <AuthProvider>
      <NavigationContainer> 
        <Stack.Navigator >
      
        <Stack.Screen name="AppIntro" component={AppIntro} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Chats" component={ChatScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{
          headerShown: false,
        }}/>
        
        </Stack.Navigator> 
    </NavigationContainer>
    </AuthProvider>
    )}
    

    
  
      
   }
export default App;

