import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

type Props = {
  img: ImageSourcePropType;
  name: string;
  size: string;
  color: string;
  price: string;
  quantity: number;
};

const CartBox = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
      }}>
      <Image
        source={props.img}
        resizeMode="cover"
        style={{
          width: 120,
          height: 140,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
        }}
      />
      <View style={{gap: 12, flex: 1, marginEnd: 12}}>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#000',
            }}>
            {props.name}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            Size: {props.size} | Color: {props.color}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 18,
              color: '#000',
            }}>
            ${props.price}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 20,
              paddingHorizontal: 10,
            }}>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 24}}>-</Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 18}}>
              {props.quantity}
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 24}}>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartBox;
