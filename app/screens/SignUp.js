import React, { useState,useContext } from 'react';
import {
    GoogleSigninButton,
    GoogleSignin,
  } from '@react-native-google-signin/google-signin';
  import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import SignInput from '../components/SignInput';
  import ConfirmButton from '../components/ConfirmButton';
  import SocialButton from '../components/SocialButton';
  import { windowHeight, windowWidth } from "../components/dimentions";
import { AuthContext } from '../navigation/AuthProvider';



const SignUpScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();

    const {register} = useContext(AuthContext)

    return (
    <LinearGradient style={styles.container} colors={['#4B76AB', '#689BB9', '#A6C1CD']}> 
      
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.navigate('Login')}>
          <Image style={styles.icon} source={require("../assets/Images/Icon/back.png")}/>
      </TouchableOpacity>
      
      <Text style={styles.text}> SignUp </Text>
     
      <SignInput
        labelvalue = {email}
        onChangeText  = {(userEmail) => setEmail(userEmail)}
        PlaceholderText = "EMAIL"
        keyboardType = "email-address"
        autoCapitalize = "none"
        autoCorrect = {false}
      />
      <View style={styles.separator} />
      <SignInput
        labelvalue = {password}
        onChangeText  = {(userPassword) => setpassword(userPassword)}
        PlaceholderText = "PASSWORD"
        secureTextEntry ={true}
      />
      <View style={styles.separator} />
      <SignInput
        labelvalue = {confirmpassword}
        onChangeText  = {(confirmPw) => setconfirmpassword(confirmPw)}
        PlaceholderText = "CONFIRM PASSWORD"
        secureTextEntry ={true}
        />
      <View style={styles.separator} />
      <ConfirmButton 
        buttonLabel = "SignUp"
        onPress={() => register(email,password,confirmpassword)}
        
      />
       <View style={styles.container2}>
       
         <Image style={styles.image1} source={require("../assets/Images/Icon/sign.png")}/>
       </View>
      </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  googleButton: {width: 60, height: 60},

  text : {
    fontSize : 57,
    alignItems : 'center',
    justifyContent : 'center',
    color : '#ffffff',
    fontFamily : 'Roboto Bold',
    //marginTop : 1,
    marginBottom : 40
    
  },
  separator : {
    height: 1,
    width : '88%',
    backgroundColor : '#ffffff'
  },
  separator1 : {
    height: 1,
    width : '30%',
    backgroundColor : '#ffffff'
  },
  container2: {
    //flex: 1,
    width: '100%',
    height : '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
    marginBottom: -20
  },
  
  BackButton : {
       
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

 image1: {
  width:'75%',
  height: '110%',
  alignItems: 'center',
  //marginTop: 60,
  justifyContent: 'center',
  marginRight: 120
},
icon:{
  width: 40,
  height: 40,
  marginRight: 15
},
 
});
    

export default SignUpScreen;