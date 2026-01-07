import React from "react";
import { FlatList,View,Text } from "react-native";



function FlateListComponent() {
     const name:string[] = ["a1",'a2','a3','a4','a5','a6','a7','a8','a9','a10','a11']
    return(
<View>
    <FlatList
    data={name}
    renderItem={({item})=><View><Text>{item}</Text></View>}
    keyExtractor={(item,index)=>index.toString()}/>

  
</View>
    )
}

export default FlateListComponent