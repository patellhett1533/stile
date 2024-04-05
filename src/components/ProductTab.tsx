import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';

type Props = {
  img: ImageSourcePropType;
  title: string;
  price: string;
};

const ProductTab = (props: Props) => {
  return (
    <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
      <Image
        source={props.img}
        resizeMode="cover"
        style={{height: 80, width: 80, borderRadius: 10}}
      />
      <View>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
          {props.title}
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
          $ {props.price}
        </Text>
      </View>
    </View>
  );
};

export default ProductTab;
