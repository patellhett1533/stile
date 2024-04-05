import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  ImageResizeMode,
} from 'react-native';
import React from 'react';

type Props = {
  sub: string;
  title: string;
  img: ImageSourcePropType;
  marginTop?: string;
  marginBottom?: string;
  innerCircle?: boolean;
  background?: string;
  text?: string;
  resize?: string;
  dark?: boolean;
};

const CollectionBanner = (props: Props) => {
  return (
    <View style={{marginHorizontal: 20, marginTop: 20}}>
      <View
        style={{
          width: '100%',
          backgroundColor: `${props.background ?? '#f8f8fa'}`,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderRadius: 15,
        }}>
        <View style={{width: '50%'}}>
          <Text style={{fontFamily: 'Poppins-ExtraLight', fontSize: 16}}>
            {props.sub}
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Poppins-Light',
              fontSize: 24,
              textTransform: 'uppercase',
              color: props.text ? props.text : '#343434',
            }}>
            {props.title}
          </Text>
        </View>
        <View>
          <Image
            source={props.img}
            resizeMode={
              props.resize ? (props.resize as ImageResizeMode) : 'cover'
            }
            style={{
              width: 120,
              height: 170,
            }}
          />
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 999,
              backgroundColor: props.dark
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.1)',
              position: 'absolute',
              alignSelf: 'flex-end',
              top: '20%',
              zIndex: -2,
            }}></View>
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 999,
              backgroundColor: props.dark
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.1)',
              position: 'absolute',
              alignSelf: 'center',
              top: '29%',
              zIndex: -1,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default CollectionBanner;
