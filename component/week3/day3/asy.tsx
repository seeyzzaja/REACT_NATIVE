import React,{useState,useEffect} from "react";
import { View,Text,TouchableOpacity,TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Asyn(){
    const [nama,setNama]=useState('')
    const [data,setData]=useState([])

const setItem= async(Value:any)=>{
    try{
        const sync = JSON.stringify(Value)
        await AsyncStorage.setItem('Testing',sync)
        GetItem()
    }
    catch(e)
    {

    }
}
const GetItem = async()=>{
    const value = await AsyncStorage.getItem('Testing')
    if (value){
        setData(JSON.parse(value))
    }
}
useEffect(()=>{
    GetItem()
},[])

return(
    <View>
        <Text>async</Text>
        <TextInput 
        value={nama}
        onChangeText={setNama}
        placeholder="masukkan nama"/>
    <TouchableOpacity 
     onPress={()=>setItem(nama)}>
        <Text>klik</Text>
    </TouchableOpacity>
    <Text>nama kamu:{data}</Text>
    </View>
)



}