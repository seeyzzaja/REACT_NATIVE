import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";

export default function Styling(){
    return(
        <View
        style={style.container}>
            <View
            style={style.container1}>
            <Text
            style={{
                fontSize:20,
                fontWeight:'bold',
                textAlign:'right'
            }}>
                container1
            </Text>
            </View>
            <View
            style={style.container2}>
                <Text>
                    container2
                </Text>
                <Text>
                    container22
                </Text>
                <Text>
                    container22
                </Text>
                <Text>
                    container22
                </Text>
                <Text>
                    container22
                </Text>
                <Text>
                    container22
                </Text>
            </View>
            <View
            style={style.button}>
                <Text>
                    Button
                </Text>
            </View>
            
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },
    container1:{
        flex:1,
        backgroundColor:'red',
        // alignItems:'center',
        justifyContent:'center'
    },
    container2:{
        backgroundColor:'green',
        flex:1,
        flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'space-between'
        flexWrap:'wrap'

    },
button:{
position:'absolute',
height: 50,
width:50,
backgroundColor:'white',
bottom:20,
right:20,
borderWidth:5,
borderColor:'red',
borderRadius:10
}

})