import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import RatingStar from './RatingStar';

type Props = {
  img: ImageSourcePropType;
  name: string;
  rate: number;
  time: string;
  review: string;
};

const ReviewList = (props: Props) => {
  return (
    <View style={{marginTop: 40}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
          <Image
            source={props.img}
            resizeMode="contain"
            style={{width: 50, height: 50, borderRadius: 999}}
          />
          <View>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
              {props.name}
            </Text>
            <RatingStar rate={props.rate} />
          </View>
        </View>
        <View>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
            {props.time}
          </Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14}}>
          {props.review}
        </Text>
      </View>
    </View>
  );
};

export default ReviewList;
