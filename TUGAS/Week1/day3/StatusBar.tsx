import React from 'react';
import { StatusBar } from 'react-native';

function StatusBarComponent() {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor="#1e1e1e"
      hidden={false}
    />
  );
}

export default StatusBarComponent;
