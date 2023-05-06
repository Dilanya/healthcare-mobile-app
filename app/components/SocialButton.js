import React from "react";
import { TouchableOpacity,StyleSheet, Image } from 'react-native';
import { windowHeight, windowWidth } from "./dimentions";

const SocialButton = ({image, ...rest}) => {
    return(
        <TouchableOpacity> 
            <Image style={styles.imageContainer} source={require("../assets/Images/Icon/welcome.png")}/>
        </TouchableOpacity>
        
    )
}
export default SocialButton;

const styles = StyleSheet.create({
    imageContainer :{
        height : windowHeight/15,
        width : windowWidth/8,
        alignItems : 'center',
        justifyContent : 'space-around'
    }
})