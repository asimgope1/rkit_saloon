import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../screens/Home";
import Login from "../loginpages/Login";
import Splash from "../component/Splash";
import MaleScroll from "../component/MaleScroll";
const Stack=createStackNavigator();
export default LoginStack=()=>{
  return (
    <Stack.Navigator initialRouteName="Login">
         <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash}/>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
        <Stack.Screen options={{headerShown:false}} name="Malescroll" component={MaleScroll}/>
    </Stack.Navigator>
  )
}