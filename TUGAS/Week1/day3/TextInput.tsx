import React from "react";
import {TextInput } from "react-native";

function TextInputCompnent (){
    return(
       <TextInput
               placeholder="Enter your name"
               style={{
                 width: 200,
                 height: 40,
                 borderWidth: 1,
                 borderColor: 'white',
                 padding: 10,
                 color: 'white',
                 marginTop: 20,
               }}
               onChangeText={usernama => console.log(usernama)}
             />
    )
}
export default TextInputCompnent