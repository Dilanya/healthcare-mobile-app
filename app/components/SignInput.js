import React from 'react' ;
import {StyleSheet, TextInput, View } from 'react-native';
import { windowWidth, windowHeight } from './dimentions';

const SignInput = ({PlaceholderText,labelvalue,...rest}) => {
    return (
       <View style={styles.container}>
           <TextInput
           value = {labelvalue}
           numberOfLines = {1}
           placeholder = {PlaceholderText}
           placeholderTextColor = {'#ffffff'} 
           style = {styles.input}
           {...rest}
           />
           
       </View>
    )   
}

export default SignInput ;

const styles = StyleSheet.create({
    container : {
       marginBottom : 10 ,
       marginTop : 5,
       width : '88%',
       height : windowHeight/15 ,
       flexDirection : 'row',
       alignItems : 'center',
       
    },

    input :{
        
        flex : 1,
        fontSize : 21,
        fontFamily : 'Roboto-Black',
        color : '#ffffff',
        justifyContent : 'center',
        alignItems : 'center',
        opacity : 0.5

    },
    
})