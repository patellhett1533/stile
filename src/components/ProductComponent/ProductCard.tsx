import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React, {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';
import RatingStar from './RatingStar';

type Props = {
  img: ImageSourcePropType;
  title: string;
  price: string;
  width?: number;
  mrp?: string;
  rate?: number;
  rating?: number;
  like?: boolean;
  showLike?: boolean;
};

const ProductCard = (props: Props) => {
  const navigation = useNavigation();
  const totalRate = new Array(5).fill(null);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductsDetail' as never)}>
      {props.showLike && (
        <TouchableOpacity
          style={{position: 'absolute', zIndex: 10, top: '4%', right: '7%'}}>
          <View
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 5,
              paddingVertical: 5,
              borderRadius: 999,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {props.like ? (
              <Image
                source={require('../../assets/images/liked.png')}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={require('../../assets/images/like.png')}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            )}
          </View>
        </TouchableOpacity>
      )}
      <Image
        source={props.img}
        resizeMode="contain"
        style={{
          height: props.width ? (props.width - 30) / 0.76 : 270,
          width: props.width ? props.width - 30 : 200,
          borderRadius: 20,
        }}
      />
      <View style={{marginTop: 10}}>
        <Text
          style={{fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16}}>
          {props.title}
        </Text>
        <Text
          style={{fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16}}>
          $ {props.price}{' '}
          {props.mrp && (
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#bebfc4',
                fontSize: 14,
                textDecorationLine: 'line-through',
              }}>
              ${props.mrp}
            </Text>
          )}
        </Text>
        {props.rate && props.rating && (
          <RatingStar rate={props.rate} rateNumber={props.rating} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
