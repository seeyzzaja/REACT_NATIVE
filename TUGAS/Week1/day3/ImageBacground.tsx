import React, { Children } from "react";
import { ImageBackground } from "react-native";

type ImageProps = {
Children: React.ReactNode
}

function ImageBackgroundComponent({Children}:ImageProps){
    return(
<ImageBackground 
 resizeMode="cover"
      source={require('./src/assets/kali-neon.png')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
>
    {Children}
</ImageBackground>
    )
} 
export default ImageBackgroundComponent