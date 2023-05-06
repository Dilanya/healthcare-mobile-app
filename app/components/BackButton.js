import React from "react";
import {Text, TouchableOpacity,StyleSheet, Image, View } from 'react-native';
import { windowHeight, windowWidth } from "./dimentions";

const BackButton = () => {
        return(
            <View style={styles.container}  > 
                <Image style={styles.image} source={require("../assets/Images/Icon/back.png")}/>
                    
            </View>
            
        )
}
export default BackButton;

const styles = StyleSheet.create({
    container : {
       
       marginBottom : -60 ,
       marginTop : -100,
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
        marginRight : 20
    }
})