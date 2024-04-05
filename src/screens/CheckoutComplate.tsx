import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import CheckoutLayout from '../components/CheckoutLayout';

type Props = {};

const CheckoutComplate = (props: Props) => {
  return (
    <CheckoutLayout
      active="3"
      hideLabel={true}
      step="Order Completed"
      button="Continue Shopping"
      link="OrderDetail">
      <View>
        <Image
          source={require('../assets/images/order_complate.png')}
          resizeMode="contain"
          style={{width: 70, height: 200, alignSelf: 'center'}}
        />
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            alignSelf: 'center',
            width: Dimensions.get('window').width / 1.4,
            textAlign: 'center',
            marginBottom: 30,
          }}>
          Thank you for your purchase. You can view your order in ‘My Orders’
          section.
        </Text>
      </View>
    </CheckoutLayout>
  );
};

export default CheckoutComplate;
