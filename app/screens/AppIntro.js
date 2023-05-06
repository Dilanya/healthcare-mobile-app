
import React from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'

 
import Onboarding from 'react-native-onboarding-swiper';


const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal:15}} 
     {...props}>
    <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal:15}} 
     {...props}>
    <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);
const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal:15}} 
     {...props}>
    <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);
 
const AppIntro = ({navigation}) => {
  
  return(
    <Onboarding
      bottomBarColor={'#A6C1CD'}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: '#A6C1CD',
          image: <Image source={require('../assets/Images/Icon/intro1.png')}style={styles.image1} />,
          title: 'Easy to Communicate',
          subtitle: 'It is easy to serach and chat with a hospital and with your doctor.',  
        },
        { 
          backgroundColor: '#A6C1CD',
          image: <Image source={require('../assets/Images/Icon/intro3.png')} style={styles.image1} />,
          title: 'Make Appointments',
          subtitle: 'Communicate with the hospital and Booking your doctor appointment easily.',
        },
        {
          backgroundColor: '#A6C1CD',
          image: <Image source={require('../assets/Images/Icon/intro2.png')}style={styles.image1} />,
          title: 'create Business account',
          subtitle: 'keep in touch with your community by creating a business account',
        },
      ]}
    />
  )}
  export default AppIntro;

  const styles = StyleSheet.create({

    
    TextStyle1: {
        fontSize: 15,
        color: '#000000', 
        fontFamily:'Handlee Regular',
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
        
        },
        TextStyle2: {
            fontSize: 20,
            color: '#03135E', 
            fontFamily:'Roboto 1bold',
            letterSpacing: 0,
            textAlign: 'center',
            marginTop: 30,
            marginLeft: 10,
            marginRight: 10
            
            },

image1: {
    width:400,
    height: 350,
    alignItems: 'center',
    marginTop: -100,
    justifyContent: 'center',
    marginLeft: '10%',
    marginBottom: -50
    
},
image2: {
    width:'17%',
    height: '7%',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
    marginLeft: '40%'
    
    
},
button: {
    width:'60%',
    height: '30%',
    borderRadius: 30,
    backgroundColor: '#03135E',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft:'20%'
}
})
