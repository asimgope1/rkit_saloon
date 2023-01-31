import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../screens/Home";
import Login from "../loginpages/Login";
import MaleSroll from "../component/MaleScroll";
import Splash from "../component/Splash";
import MaleScroll from "../component/MaleScroll";
const Stack=createStackNavigator();
export default HomeStack=()=>{
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
        <Stack.Screen options={{headerShown:false}} name="Malescroll" component={MaleScroll}/>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
        
        

    </Stack.Navigator>
  )
}