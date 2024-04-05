import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const Button = (props: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#343434',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }}
      onPress={() => navigation.navigate('ProductsCart' as never)}>
      <Image
        source={require('../assets/images/shopping.png')}
        resizeMode="contain"
        style={{width: 25, height: 25, marginBottom: 6}}
      />
      <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 18}}>
        Add To Cart
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
