import React from "react";
import ButtonComponent from "./component/week1/day5/Button";
import PressableComponent from "./component/week1/day5/Presseble";
import TouchableOpacityComponent from "./component/week1/day5/TouchableOpacity";
import TouchableHighlightComponent from "./component/week1/day5/TouchableHighlight";
import TouchableWithoutFeedbackComponent from "./component/week1/day5/TouchableWithoutFeedback";
import SimpleNativeFeedback from "./component/week1/day5/TouchableNativeFeedback";


function App() {
  return(
    <>
    <ButtonComponent/>
    <PressableComponent/>
    <TouchableOpacityComponent/>
    <TouchableHighlightComponent/>
    <TouchableWithoutFeedbackComponent/>
    <SimpleNativeFeedback/>
    </>
  )
}
export default App