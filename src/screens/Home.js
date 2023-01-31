
import React, {useState, useCallback} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  Appoint,
  Call,
  FeMale,
  Location,
  Male,
  Pointer,
  Search,
  Service,
  Whatsapp,
} from '../constants/imagepath';

import {SafeAreaView} from 'react-native-safe-area-context';
import {HEIGHT, MyStatusBar, WIDTH} from '../constants/config';
import {BACKGROUND, BLACK, Elevate, Radius, THEME} from '../constants/color';
import MaleSroll from '../component/MaleScroll';
import Navigation from '../navigation/Navigation';

function App({navigation}) {
  const [page, setpage] = useState(0);
  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openURL(`tel:${8340431775}`)();
  }, []);
  const handlePress1 = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openURL(
      `whatsapp://send?phone=${+918340431775}&text=${'hello'}`,
    );
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <MyStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={{flex: 1, height: 840}}>
        {page == 0 && ( //Dashboard
          <>
            <View
              style={{
                backgroundColor: 'white',
                height: HEIGHT,
                width: WIDTH,
              }}>
              <Text style={styles.titleText}>Welcome Rechargekit! </Text>
              <Text style={styles.moto}> #Be You</Text>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  source={require('../assets/images/bell.png')}
                  style={{
                    marginHorizontal: 310,
                    marginVertical: 10,
                    marginTop: -20,
                    width: 24,
                    height: 24,
                  }} //header and notification bell
                />
              </TouchableOpacity>

              <View // search placeholder
                style={{
                  height: 40,
                  width: 320,
                  // backgroundColor:'yellow',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  margin: 10,
                  borderWidth: 0.8,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    height: 40,
                    width: 50,
                    // backgroundColor:'green',
                    alignSelf: 'flex-start',
                  }}>
                  <Image
                    source={Search}
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      height: 20,
                      width: 20,
                    }}
                  />
                </View>
                <TouchableOpacity>
                  <TextInput
                    styles={{borderWidth: 20, borderRadius: 16}}
                    placeholder="Services"
                    placeholderTextColor={'grey'}
                    keyboardType={'default'}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity 
                onPress={() => {
                  navigation.navigate('Login');
                }}
                activeOpacity={0.9}
                style={{height: 150, width: 316, borderRadius: 20,alignSelf:'center'}}>
                <Image
                  style={{
                    height: 119,
                    width: 316,
                    borderRadius: 8,
                    marginVertical: 20,
                  }}
                  source={Appoint} //Appointment banner
                />
              </TouchableOpacity>

              <View
                style={{
                  height: 119,
                  width: 350,
                  // backgroundColor:'yellow',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  margin: 10,
                  // borderWidth:.8,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    height: 119,
                    width: 190,
                    // backgroundColor:'green',
                    alignSelf: 'flex-start',
                    borderColor: 'black',
                    marginLeft: 10,
                    marginRight: -12,
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      // setpage(1);
                      navigation.navigate('Malescroll')
                    }}>
                    <Image
                      source={Male} // Male banner
                      style={{
                        height: 119,
                        width: 153,
                        borderRadius: 8,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    // setpage(1);
                    navigation.navigate('Malescroll');
                  }}>
                  <Image
                    source={FeMale} // Female banner
                    style={{
                      height: 119,
                      width: 153,
                      borderRadius: 8,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{height: 84, width: 316, borderRadius: 8,alignSelf:'center'}}
                activeOpacity={0.9}>
                <Image
                  style={{
                    width: 316,
                    height: 84,
                    borderRadius: 8,
                    // marginHorizontal: 20,
                    marginVertical: 10,
                  }}
                  source={Service} //Service banner
                />
              </TouchableOpacity>

              <View //contact us banner
                style={{
                  height: 61,
                  width: 316,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginVertical: 30,
                  borderRadius: 6,
                  // borderWidth:.2,
                  borderColor: '#DEDEDE',
                  elevation: 2,
                }}>
                <View
                  style={{
                    height: 61,
                    width: 180,
                    borderRadius: 5,
                    // backgroundColor: 'green',
                    alignSelf: 'flex-start',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      marginHorizontal: 10,
                      fontWeight: 'bold',

                      color: 'black',
                      margin: 10,
                    }}>
                    Contact us
                  </Text>
                  <Text style={{color: 'grey', marginHorizontal: 10}}>
                    If you have any question{' '}
                  </Text>
                </View>
                <View
                  style={{
                    height: 43,
                    width: 43,
                    marginHorizontal: 10,
                    marginVertical: 10,

                    // backgroundColor: 'blue',
                    alignSelf: 'flex-start',
                  }}>
                  <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
                    <Image
                      source={Call} //call  banner
                      style={{
                        width: 43,
                        height: 43,

                        // resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 60,
                    width: 90,
                    marginVertical: 10,
                    marginHorizontal: 10,

                    // backgroundColor: 'green',
                    alignSelf: 'flex-start',
                  }}>
                  <TouchableOpacity activeOpacity={0.5} onPress={handlePress1}>
                    <Image
                      source={Whatsapp} //whatsapp banner
                      style={{
                        width: 43,
                        height: 43,
                        // resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  // backgroundColor: 'red',
                  height: 194,
                  width: 316,
                  alignSelf: 'center',
                  // flexDirection: 'row',
                }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    height: 138,
                    width: 316,
                    // backgroundColor:'pink'
                  }}>
                  <Image
                    source={Location} //Location banner
                    style={{
                      height: 138,
                      width: 316,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    height: 55,
                    width: 316,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    borderRadius: 6,
                    borderWidth: 0.5,
                    borderColor: '#DEDEDE',
                    elevation: 2,
                  }}>
                  <View
                    style={{
                      height: 55,
                      width: 200,
                      // backgroundColor:'cyan',
                      flexDirection: 'column',
                    }}>
                    <Text style={{fontWeight: 'bold', marginHorizontal: 10}}>
                      Location
                    </Text>
                    <Text style={{marginHorizontal: 10, color: BLACK}}>
                      Salon Beauty Parlour, Metro House, Bhubaneswar, Odisha{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 43,
                      width: 43,
                      // backgroundColor:'yellow',
                      marginHorizontal: 50,
                    }}>
                    <TouchableOpacity activeOpacity={0.5}>
                      <Image
                        source={Pointer} //My salon location
                        style={{
                          height: 43,
                          width: 43,
                          marginVertical: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
        {page == 1 && ( //for male redirection
          <>
            <MaleSroll />
          </>
        )}
        {/* {page == 2 &&( // for female
          <>
          <FemaleScroll Category={Category} CategoryView={CategoryView} Back={Back} Slide1={Slide1}/>
          </>
        )} */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginHorizontal: 30,
    marginVertical: 15,
    color: 'black',
  },
  moto: {
    fontFamily: 'Open Sans',
    marginHorizontal: 30,
    marginVertical: -10,
    color: 'black',
  },
  input: {
    margin: 10,
    marginLeft: 36,
    height: 46,
    borderWidth: 1,
    borderRadius: 7,
  },
  loc: {
    fontWeight: 'bold',
    marginHorizontal: 30,
  },
});

export default App;
