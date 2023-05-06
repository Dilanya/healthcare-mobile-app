import React from "react";
import {Text, TouchableOpacity,StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from "./dimentions";

const ConfirmButton = ({buttonLabel, ...rest}) => {
        return(
            <TouchableOpacity style={styles.container} {...rest} > 
                <Text
                    style={styles.input}> {buttonLabel}
                </Text>
                    
            </TouchableOpacity >
            
        )
}
export default ConfirmButton;

const styles = StyleSheet.create({
    container : {
       marginBottom : 10 ,
       marginTop : 20,
       width : windowWidth/2,
       height : windowHeight/12 ,
       alignItems : 'center',
       backgroundColor : '#ffffff',
       borderRadius : 25
    },

    input :{
        padding : 8,
        fontSize : 28,
        color : '#0D1B41',
        justifyContent : 'center',
        alignItems : 'center',
        fontFamily : 'Roboto Black'

    }
})