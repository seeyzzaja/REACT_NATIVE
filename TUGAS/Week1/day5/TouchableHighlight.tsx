import React from "react";
import { View,Text,TouchableHighlight,StyleSheet, Alert } from "react-native";

export default function TouchableHighlightComponent(){
    return(
        <View>
            <TouchableHighlight
            underlayColor="#798015ff" 
            style={style.button}
            onPress={()=>Alert.alert('TouchableHighlight','ini adalah TouchableHighlight')}>
                <Text>
                klik
                </Text>
            </TouchableHighlight>
        </View>
    )
}
 const style =StyleSheet.create({
    button:{
        backgroundColor:'green',
        alignItems:'center',
        padding:10,
        margin:20
        
    }
 })
