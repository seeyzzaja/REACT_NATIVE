import React,{useState} from "react";
import { View,Text,ScrollView,StyleSheet,RefreshControl } from "react-native";




function RefreshComponent (){
    const name:string[] = ["a1",'a2','a3','a4','a5','a6','a7','a8','a9','a10','a11']
    const [refresh,setRefresh]=useState(false)
    const refreshContent = () =>{
        setRefresh(true)
        setTimeout(()=>{
            setRefresh(false)
        },2000)}
    return(
        <View style={styles.container}>
            <ScrollView
            refreshControl={<RefreshControl refreshing={refresh} onRefresh={refreshContent}/>}
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

export default RefreshComponent