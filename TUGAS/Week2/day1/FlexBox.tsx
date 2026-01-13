import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default function FlexBox() {
    return(
        <View style={{flex:1}}>
            <View style={style.flexbox1}>
                <Text >FlexBox 1</Text>
                <Text>FlexBox 2</Text>
                <Text>FlexBox 3</Text>
            </View>
            <View style={style.flexbox2}>
                <Text>FlexBox 2</Text>
                <Text>FlexBox 2</Text>
                <Text>FlexBox 2</Text>
                <Text>FlexBox 2</Text>
            </View>
            <View style={style.flexbox3}>
                <Text>FlexBox 3</Text>
                <Text>FlexBox 3</Text>
                <Text>FlexBox 3</Text>
            </View>
            
        </View>
    )
}

const style=StyleSheet.create({
    flexbox1:{
        backgroundColor:'red',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    flexbox2:{
        backgroundColor:'blue',
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    flexbox3:{
        backgroundColor:'green',
        flex:1,
        flexDirection:'row-reverse',
        justifyContent:'flex-start',
        alignItems:'stretch'
    }

})