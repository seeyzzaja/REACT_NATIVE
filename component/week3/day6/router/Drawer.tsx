import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Inbox from "../screen/Inbox";
import OutBox from "../screen/OutBox";
import ListProduk from "../../../../TUGAS/Week1/day6/Fatch";

const Drawer =createDrawerNavigator()
type Props = {
  user: string;
};
export default function DrawerNavigator({ user }: Props){
    return(
<Drawer.Navigator
screenOptions={{swipeEnabled:true,swipeEdgeWidth:10}}>
    <Drawer.Screen name="List produk"
    component={ListProduk}/>
    <Drawer.Screen name="ListPokemon"
    component={OutBox}/>
</Drawer.Navigator>
    )
}