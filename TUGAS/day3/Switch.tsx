import React,{useState} from "react";
import { Switch,View } from "react-native";

function SwitchComponent (){
    const [switchContent,setSwitchContent] = useState(false)
  const onChangeSwitch = (value: boolean) => {
    setSwitchContent(value);
  };
    return(
<View style={{padding: 20}}>
    <Switch 
    value={switchContent}
    onValueChange={onChangeSwitch}
    trackColor={{false:'red',true:'blue'}}
    thumbColor={switchContent ? 'black' : 'white'}/>
</View>
    )
}
export default SwitchComponent