import React, {useState} from 'react';
import {
  Button,
  Modal,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  Linking,
  BackHandler,
  Alert,
} from 'react-native';
import {Elevate} from '../constants/color';
import {HEIGHT, mod, MyStatusBar, WIDTH} from '../constants/config';
import {Back, Dial, Ellipse, Logo} from '../constants/imagepath';
import Navigation from '../navigation/Navigation';
import HomeStack from '../navigation/HomeStack';
import { useFocusEffect } from '@react-navigation/native';
export default Login = ({navigation}) => {

    const [page, setpage] = useState(0);
    const [err, setErr] = useState('');



    useFocusEffect(() => {
      const backAction = () => {
          if (page == 0) {
              navigation.goBack()
          } else if (page == 1) {
              setErr('');
              Alert.alert(
                  "",
                  "Do you want to change your mobile number ?",
                  [
                      {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                      },
                      {
                          text: "OK", onPress: () => {
                              setpage(0)
                          }
                      }
                  ]
              )
          }
          return true;
      };
      const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
      );

      return () => backHandler.remove();
  });


  
  return (
  
  
    <View style={{flex: 1,backgroundColor:'white'}}>
      <MyStatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      { page == 0 && (
        <>
     <View style={{flex:1,height:840}}>
      
      
      <View
        style={{
          height: 30,
          width: 340,
          alignSelf: 'center',
          marginVertical: 30,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "",
              "Do you want to Exit ?",
              [
                  {
                      text: "Cancel",
                      onPress: () => navigation.navigate('Home'),
                      style: "cancel"
                  },
                  {
                      text: "OK", onPress: () => {
                        BackHandler.exitApp();
                      }
                  }
              ]
          )
          }}
          style={{height: 24, width: 24}}>
          <Image source={Back} style={{height: 25, width: 25}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginHorizontal: 130,
            fontFamily: 'Roboto-Bold',
            color: 'black',
          }}>
          Login
        </Text>
      </View>
      <View>
        <Image
          source={Ellipse}
          style={{height: 102, width: 102, alignSelf: 'center'}}></Image>
        
      </View>
      <Text style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
        SALON BBSR
      </Text>
      <Text style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
        Login to your account to book{' '}
      </Text>
      <Text style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
        appointment{' '}
      </Text>

      <View
        style={{
          height: 508,
          width: 360,
          backgroundColor: '#F5F5F5',
          marginVertical: 10,
          borderRadius: 15,
          elevation:5,
        //    backgroundColor: 'transparent',
          borderColor: 'white',
        //   overflow: 'hidden',
          shadowColor: 'black',
          shadowRadius: 10,
          shadowOpacity: 10,
          alignSelf:'center'
    
        }}>
        <View
          style={{
            height: 48,
            width: 302,
            backgroundColor: 'white',
            alignSelf: 'center',
            marginVertical: 30,
            flexDirection: 'row',
            borderRadius: 4,
          }}>
          <View style={{height: 24, width: 24}}>
            <Image
              style={{
                height: 24,
                width: 24,
                alignSelf: 'flex-start',
                marginHorizontal: 10,
                marginVertical: 12,
              }}
              source={Dial}
            />
          </View>
          <TouchableOpacity
            style={{height: 48, width: 240, alignSelf:'center'}}
            activeOpacity={1000}>
            <TextInput
              style={{marginHorizontal: 20, fontSize: 14}}
              placeholder="+91"
              maxLength={13}
              keyboardType="phone-pad">
              <Text>+91</Text>
            </TextInput>
          </TouchableOpacity>
        </View>
        <View style={{height: 37, width: 220, alignSelf: 'center'}}>
          <Text
            style={{marginHorizontal:15, fontSize: 12, fontWeight: 'bold',color:'black'}}>
            {' '}
            By signing in you agree to our{' '}
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://google.com')}>
              t&c
            </Text>
          </Text>
          <Text
            style={{marginHorizontal: 60, fontSize: 12, fontWeight: 'bold',color:'black'}}>
            and{' '}
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://google.com')}>
              privacy policy
            </Text>
            .
          </Text>
        </View>
        <TouchableOpacity style={{height:43,width:302,backgroundColor:'black',alignSelf:'center',marginVertical:30,borderRadius:5}}>
            <Text style={{color:'white',alignSelf:'center',marginVertical:10,fontSize:18}}
            onPress={()=>{
              setpage(1);

            }}
            
            >Login</Text>

        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{color:'black',fontSize:12,alignSelf:'center',marginVertical:20}}
                    onPress={()=> {
                        navigation.navigate('Home')
                    }}
                    >
                SKIP
            </Text>
        </TouchableOpacity>
      
      </View>
  
      </View>
      </>
)}  

  {page ==1 &&(
    <>
    <View style={{flex:1,height:840}}>
      
      
      <View
        style={{
          height: 30,
          width: 340,
          alignSelf: 'center',
          marginVertical: 30,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.goBack();
            setpage(0);
            Alert.alert(
              "",
              "OTP not verified ?",
              [
                  {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                  },
                  {
                      text: "OK", onPress: () => {
                          setpage(0)
                      }
                  }
              ]
          )
          
          }}
          style={{height: 24, width: 24}}>
          <Image source={Back} style={{height: 25, width: 25}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginHorizontal: 130,
            fontFamily: 'Roboto-Bold',
            color: 'black',
          }}>
          Verify
        </Text>
      </View>
      <View>
        <Image
          source={Ellipse}
          style={{height: 102, width: 102, alignSelf: 'center'}}></Image>
        
      </View>
      <Text style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
        SALON BBSR
      </Text>
      <Text style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
        Login to your account to book{' '}
      </Text>
      <Text style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
        appointment{' '}
      </Text>

      <View
        style={{
          height: 508,
          width: 360,
          backgroundColor: '#F5F5F5',
          marginVertical: 10,
          borderRadius: 15,
          elevation:5,
        //    backgroundColor: 'transparent',
          borderColor: 'white',
        //   overflow: 'hidden',
          shadowColor: 'black',
          shadowRadius: 10,
          shadowOpacity: 10,
          alignSelf:'center'
    
        }}>
        <View
          style={{
            height: 48,
            width: 302,
            backgroundColor: 'white',
            alignSelf: 'center',
            marginVertical: 30,
            flexDirection: 'row',
            borderRadius: 4,
          }}>
          <View style={{height: 24, width: 24}}>
            <Image
              style={{
                height: 24,
                width: 24,
                alignSelf: 'flex-start',
                marginHorizontal: 10,
                marginVertical: 12,
              }}
              source={Dial}
            />
          </View>
          <TouchableOpacity
            style={{height: 48, width: 240, alignSelf:'center'}}
            activeOpacity={1000}>
            <TextInput
              style={{marginHorizontal: 20, fontSize: 14}}
              placeholder="+91"
              maxLength={13}
              keyboardType="phone-pad">
              <Text>+91</Text>
            </TextInput>
          </TouchableOpacity>
        </View>
        <View style={{height: 37, width: 220, alignSelf: 'center'}}>
          <Text
            style={{marginHorizontal:15, fontSize: 12, fontWeight: 'bold',color:'black'}}>
            {' '}
            By signing in you agree to our{' '}
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://google.com')}>
              t&c
            </Text>
          </Text>
          <Text
            style={{marginHorizontal: 60, fontSize: 12, fontWeight: 'bold',color:'black'}}>
            and{' '}
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://google.com')}>
              privacy policy
            </Text>
            .
          </Text>
        </View>
        <TouchableOpacity style={{height:43,width:302,backgroundColor:'black',alignSelf:'center',marginVertical:30,borderRadius:5}}>
            <Text style={{color:'white',alignSelf:'center',marginVertical:10,fontSize:18}}>Verify</Text>

        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{color:'black',fontSize:12,alignSelf:'center',marginVertical:20}}
                    onPress={()=> {
                        navigation.navigate('Home')
                    }}
                    >
                SKIP
            </Text>
        </TouchableOpacity>
      
      </View>
  
      </View>
    
    
    
    
    </>


  )}
    </View>
                
  
  
  );
};
