import {View, Text} from 'react-native';
import React from 'react';
import RatingStar from './RatingStar';
import RatingLine from './RatingLine';

type Props = {};

const RatingBox = (props: Props) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 18,
          color: '#000',
        }}>
        Reviews
      </Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 24,
              color: '#000',
            }}>
            4.9
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#777e90',
            }}>
            out of 5
          </Text>
        </View>
        <RatingStar rate={4} />
      </View>
      <View>
        <RatingLine star={5} percent={80} />
        <RatingLine star={4} percent={12} />
        <RatingLine star={3} percent={5} />
        <RatingLine star={2} percent={3} />
        <RatingLine star={1} percent={0} />
      </View>
    </View>
  );
};

export default RatingBox;
