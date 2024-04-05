import {View, Text, Dimensions, Image, ImageSourcePropType} from 'react-native';
import React from 'react';

type Props = {
  cover: ImageSourcePropType;
  background: ImageSourcePropType;
  card: ImageSourcePropType;
  number: string;
  name: string;
  valid: string;
};

const Card = (props: Props) => {
  return (
    <View style={{paddingHorizontal: 5}}>
      <Image
        source={props.cover}
        resizeMode="contain"
        style={{
          width: Dimensions.get('window').width - 50,
          height: (Dimensions.get('window').width - 50) * (191 / 327),
        }}
      />
      <Image
        source={props.background}
        resizeMode="contain"
        style={{
          position: 'absolute',
          left: 5,
          width: Dimensions.get('window').width - 50,
          height: (Dimensions.get('window').width - 50) * (191 / 327),
        }}
      />
      <View
        style={{
          position: 'absolute',
          left: 5,
          borderWidth: 1,
          borderColor: '#fff',
          width: Dimensions.get('window').width - 50,
          height: (Dimensions.get('window').width - 50) * (191 / 327),
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Image
            source={props.card}
            resizeMode="contain"
            style={{width: 60, height: 40}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#fff',
              fontSize: Dimensions.get('window').width / 20,
              letterSpacing: 5,
            }}>
            {props.number}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: '#fff',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              Cardholder
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#fff',
                fontSize: 16,
              }}>
              {props.name}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: '#fff',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              Valid thru
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#fff',
                fontSize: 16,
              }}>
              {props.valid}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
