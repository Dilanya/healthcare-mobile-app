import React, {Component, useContext} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import ConfirmButton from '../components/ConfirmButton';
import { windowHeight, windowWidth } from "../components/dimentions";
import { AuthContext } from '../navigation/AuthProvider';

const WelcomeScreen = ({navigation}) => {
       
    const {user,logout} = useContext(AuthContext);
      return (
        
    <LinearGradient style={styles.container} colors={['#4B76AB', '#689BB9', '#A6C1CD']}> 
           
        <Image style={styles.image1} source={require("../assets/Images/Icon/welcome.png")}/>
        <Text style={styles.TextStyle2}>WELCOME ! </Text>
        <Text style={styles.TextStyle1}>Your Health is Your Greatest Wealth. Be your own health care provider.Be the sole propertier of your Health.</Text>
    
        <TouchableOpacity style={styles.forwardButton} onPress={() => navigation.navigate('Tab')}>
          <Image style={styles.image} source={require("../assets/Images/Icon/right-arrow.png")}/>
        </TouchableOpacity> 
        
    </LinearGradient>           
      );
    }
export default WelcomeScreen;


   
    

const styles = StyleSheet.create({

container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    },
TextStyle1: {
    fontSize: 20,
    color: '#000000', 
    fontFamily:'Handlee Regular',
    letterSpacing: 0,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
    
    },
TextStyle2: {
    fontSize: 25,
    color: '#03135E', 
    fontFamily:'Roboto 1bold',
    letterSpacing: 0,
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
    
    },

image1: {
    width:300,
    height: 320,
    alignItems: 'center',
    //marginTop: 60,
    justifyContent: 'center',
    marginLeft: '10%'
},

button: {
    width:'60%',
    height: '10%',
    borderRadius: 35,
    backgroundColor: '#03135E',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft:'20%',
    marginVertical: '12%'
},

forwardButton : {
    
    marginBottom : -60 ,
    marginTop : -10,
    width : windowWidth/2,
    height : windowHeight/11 ,
    alignItems : 'flex-end',
    backgroundColor : '#A6C1CD',
    borderRadius : 28,
    justifyContent : 'space-evenly',
    marginLeft : -400
    },

image : {
    height : 40,
    width : 40,
    marginRight : 20 }

    })


    




