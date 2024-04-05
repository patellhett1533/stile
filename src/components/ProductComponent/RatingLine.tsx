import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {
  star: number;
  percent: number;
};

const RatingLine = (props: Props) => {
  return (
    <View
      style={{
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
      }}>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 16,
          color: '#777e90',
        }}>
        {props.star}
      </Text>
      <Image
        source={require('../../assets/images/rate.png')}
        resizeMode="contain"
        style={{width: 18, height: 18}}
      />
      <View
        style={{
          flex: 1,
          width: '100%',
          height: 5,
          backgroundColor: '#eff0f1',
          borderRadius: 5,
        }}>
        <View
          style={{
            flex: 1,
            width: `${props.percent}%`,
            height: 5,
            backgroundColor: '#508a7b',
            borderRadius: 5,
          }}></View>
      </View>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 16,
          color: '#777e90',
        }}>
        {props.percent}%
      </Text>
    </View>
  );
};

export default RatingLine;
