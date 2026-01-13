import React from "react";
import { View,Text,Button, Alert } from "react-native";

export default function ButtonComponent(){
    return(
        <View>
            <Text>
                login
            </Text>
            <Button 
            onPress={()=>Alert.alert('ini adalah button','kamu sudah klik button')}
            title="login"
            color={'red'}/>
        </View>
    )
}