import React from 'react';
import { Image } from 'react-native';
function ImageComponent() {
  return (
    <Image
      source={require('./src/assets/kali-neon.png')}
      style={{ width: 200, height: 200 }}
    />
  );
}
export default ImageComponent;