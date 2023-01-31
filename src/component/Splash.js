import React, { useEffect, useState } from "react";
import { Button, ImageBackground, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { BACKGROUNDBLACK, BLACK } from "../constants/color";
import { HEIGHT, mod, MyStatusBar, WIDTH } from "../constants/config";
import { IMAGEBACKGROUND, SPLASH } from "../constants/imagepath";
export default Splash = ({ navigation }) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },2000)
    },[])

    return (
        <>
            <View style={{ flex: 1, }}>
                <MyStatusBar backgroundColor={BACKGROUNDBLACK} barStyle={'light-content'} />
                <View style={{ flex: 1, justifyContent: 'center',backgroundColor:'red' }}>
                    {/* <ImageBackground
                        resizeMethod="resize"
                        style={{
                            flex:1
                        }}
                        source={SPLASH}

                    /> */}
                </View>
            </View>
        </>
    )
}
