import React, { useState , useContext } from 'react';
import auth from '@react-native-firebase/auth';
import {View, StyleSheet, Text, TouchableOpacity, Image, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SignInput from '../components/SignInput';
import ConfirmButton from '../components/ConfirmButton';
import { windowHeight } from '../components/dimentions';
import { AuthContext } from '../navigation/AuthProvider';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const LoginScreen = ({navigation}) => {
  
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  const {login,googleLogin} = useContext(AuthContext)

  return (
    
      <LinearGradient style={styles.container} colors={['#4B76AB', '#689BB9', '#A6C1CD']}> 
      <Text style={styles.text}> Login </Text>
      
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
      <ConfirmButton 
        buttonLabel = "LOGIN"
        onPress={() => login(email,password)}
      />
      <TouchableOpacity>
      <Text style={{color:'#ffffff', marginBottom: 10, fontFamily:'Roboto Medium' }}>forget password ?</Text>
      </TouchableOpacity>
      <View style={styles.container2}>
          <View style={styles.separator1}/>
          <Text style ={{color :'#ffffff' , fontFamily: 'Roboto Black',
            fontSize:25}}>   or   </Text>
          <View style={styles.separator1}/>
      </View>
      <View style={styles.container3}>
      <Text style={{color:'#ffffff',fontFamily:'Roboto Medium',marginBottom: 15}}>Sign in with</Text>
      

      
      <View style={styles.imageContainer}>
      <TouchableOpacity > 
            <Image style={styles.image} source={require("../assets/Images/Icon/facebook.png")}/>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => googleLogin()}> 
            <Image style={styles.image} source={require("../assets/Images/Icon/google.png")}/>
      </TouchableOpacity>
      </View>

      
      <TouchableOpacity  onPress={() => navigation.navigate('Sign Up')}>
      <Text style={{fontSize :20,
                  color:'#ffffff' , 
                  fontFamily : 'Roboto Medium',
                  marginBottom: -50}}>Don't Have an Account ? Create Here</Text>
      </TouchableOpacity>
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
    height : '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: -80
  },
  container3: {
    //flex: 1,
    width: '100%',
    height : '8%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  circle : {
    width : 1000,
    height : 1000,
    borderRadius : 500,
    backgroundColor : '#ffffff',
    opacity : 0.05,
    marginTop : 100,
    marginLeft : -600
  },
  imageContainer :{
    height : 60,
    width : '100%',
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent: 'space-evenly'
},
image : {
  height : 40,
  width : 40,
  
}
});

export default LoginScreen;