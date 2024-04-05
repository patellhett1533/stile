import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {
  rate: number;
  rateNumber?: number;
};

const RatingStar = (props: Props) => {
  const totalRate = new Array(5).fill(null);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 4,
      }}>
      {totalRate.map((_, i) => {
        if (i <= props.rate - 1) {
          return (
            <Image
              source={require('../../assets/images/rate.png')}
              resizeMode="contain"
              style={{width: 15, height: 15}}
              key={i}
            />
          );
        }
        return (
          <Image
            source={require('../../assets/images/rate-outline.png')}
            resizeMode="contain"
            style={{width: 15, height: 15}}
            key={i}
          />
        );
      })}
      {props.rateNumber && (
        <Text
          style={{
            marginStart: 4,
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
          }}>
          ({props.rateNumber})
        </Text>
      )}
    </View>
  );
};

export default RatingStar;
