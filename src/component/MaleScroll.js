import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {HEIGHT, WIDTH} from '../constants/config';
import {
  Back,
  Beard,
  Bleach,
  Bodypolish,
  Brazil,
  BridalPkg,
  Cleanup,
  Facial,
  Flavouredwax,
  GroomPkg,
  Hair,
  HairColor,
  HairSpa,
  HairStyle,
  HairTreat,
  HairWash,
  Hand,
  Head,
  Makeup,
  Manicure,
  Other,
  Padicure,
  Rica,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Threading,
  Waxing,
} from '../constants/imagepath';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {Elevate} from '../constants/color';
import {SafeAreaFrameContext} from 'react-native-safe-area-context';
export default MaleSroll = ({navigation}) => {
  const POSTERS = [
    {
      image: Slide1,
    },
    {
      image: Slide2,
    },
    {
      image: Slide3,
    },
    {
      image: Slide4,
    },
    {
      image: Slide5,
    },
  ];

  const DATA = [{}];

  const Category = [
    {img: Hand, name: 'Value Packages',key:1},
    {img: Hair, name: 'Hair Cut'},
    {img: Beard, name: 'Beard Trimming/Shaving'},
    {img: Head, name: 'Head Massage'},
    {img: HairWash, name: 'Hair Wash'},
    {img: HairStyle, name: 'Hair Styling'},
    {img: HairSpa, name: 'Hair Spa'},
    {img: HairTreat, name: 'Hair Treatment'},
    {img: HairColor, name: 'Hair Color'},
    {img: Facial, name: 'Facial'},
    {img: Padicure, name: 'Padicure'},
    {img: Manicure, name: 'Manicure'},
    {img: Threading, name: 'Threading'},
    {img: Bleach, name: 'Bleach'},
    {img: Waxing, name: 'Waxing'},
    {img: Brazil, name: 'Brazillian Wax'},
    {img: Rica, name: 'Rica Waxing'},
    {img: Flavouredwax, name: 'flavoured Waxing'},
    {img: Cleanup, name: 'CleanUp'},
    {img: Makeup, name: 'MakeUp'},
    {img: Bodypolish, name: 'Body Polish'},
    {img: BridalPkg, name: 'Bridal Package'},
    {img: GroomPkg, name: 'Groom Package'},
    {img: Other, name: 'Threading'},
  ];
const   handlePress=(key)=>{
console.log(key)
  }
  const CategoryView = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={{
            height: 86,
            width: 70,
            backgroundColor: '#F1F1F1',
            marginHorizontal: 5,
            marginVertical: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            elevation: Elevate,
          }}>
          <Image
            style={{
              height: 45,
              width: 51,
            }}
            source={item.img}
            // onPress={()=>handlePress(item.key)}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 8,
            }}>
            {' '}
            {item.name}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  const ListHeader = () => {
    return (
      <View>
        <View style={{height: 230, width: 370}}>
          <FlatListSlider
            data={POSTERS}
            contentContainerStyle={{height: 230}}
            imagekey={'banner'}
            loop={true}
            autoscroll={true}
            height={230}
            timer={2000}
            local
            onpress={() => {
              return false;
            }}
          />
        </View>

        <View
          style={{
            height: 58,
            width: 305,
            backgroundColor: 'white',
            marginHorizontal: 30,
            marginVertical: -30,
            borderRadius: 7,
            flexDirection: 'column',
            elevation: 3,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              color: '#000000',
              marginHorizontal: 25,
            }}>
            Fringe Unisex Salon
          </Text>
          <Text
            style={{
              marginHorizontal: 25,
              color: '#787878',
            }}>
            Pampering Perfection
          </Text>
        </View>
        <View
          style={{
            marginVertical: 40,
            marginHorizontal: 25,
            height: 21,
            width: 150,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              marginHorizontal: 10,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Services we offer
          </Text>
        </View>
      </View>
    );
  };

  const RenderItems = () => {
    return (
      <View
        style={{
          marginVertical: -25,
          height: 665,
          width: 320,
          alignSelf: 'center',
        }}>
        <FlatList numColumns={4} data={Category} renderItem={CategoryView} />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', marginVertical: 35}}>
      <TouchableOpacity
        onPress={() => {
          console.log("Go Back");
          navigation.goBack();
        }}
        style={{
          // position: 'absolute',
          backgroundColor: 'transparent',
          // top:20
        }}>
        <Image
          source={Back}
          style={{
            marginHorizontal: 10,
            // position:'absolute',
            marginVertical: 10,
            height: 30,
            width: 30,
          }}
        />
      </TouchableOpacity>
      <FlatList
        style={{flex: 1}}
        data={DATA}
        ListHeaderComponent={ListHeader}
        renderItem={RenderItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
