import NetInfo from '@react-native-community/netinfo';
import { useState,useEffect } from 'react';

export const useNetworkingInfo =()=>{
    const [online,setOnline]=useState(true)
    const [typeConection,setTypeConcetion] =useState('unknown')

    useEffect(()=>{
        const unsubcribe=NetInfo.addEventListener(state =>{
            const recable = state.isConnected === true && state.isInternetReachable === true
            setOnline(recable)
            setTypeConcetion(state.type || 'unknown')
        })
        NetInfo.fetch().then(state =>{
            setOnline(state.isConnected  === true && state.isInternetReachable === true)
            setTypeConcetion(state.type ?? 'unknown')
        })
        return ()=>unsubcribe()
    },[])

    return{online,typeConection}
}