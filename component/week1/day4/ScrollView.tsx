import React from "react";
import { View,Text,ScrollView,StyleSheet } from "react-native";




function ScrollViewContent (){
    const name:string[] = ["a1",'a2','a3','a4','a5','a6','a7','a8','a9','a10','a11']
    return(
        <View style={styles.container}>
            <ScrollView
            contentContainerStyle={{gap:16}}
            showsVerticalScrollIndicator={true}
            scrollEnabled>
                <View >
                {name.map((item,index)=>(
                    <Text key={index}style={styles.userName}>
                       {item}
                    </Text>
                ))}
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        display:'flex'

    },
    userName:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:80
    }
})

export default ScrollViewContent