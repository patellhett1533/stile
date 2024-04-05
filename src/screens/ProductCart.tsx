import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import NestedHeader from '../components/NestedHeader';
import CartBox from '../components/CartBox';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const ProductCart = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Your Cart" />
        <View style={{marginVertical: 30, marginHorizontal: 20, gap: 20}}>
          <CartBox
            img={require('../assets/images/product_img1.png')}
            name="Rise Crop Hoodie"
            size="L"
            color="Red"
            price="80.00"
            quantity={1}
          />
          <CartBox
            img={require('../assets/images/tab_2.png')}
            name="Cotton Tshirt"
            size="M"
            color="Black"
            price="30.00"
            quantity={2}
          />
          <CartBox
            img={require('../assets/images/popular_3.png')}
            name="Kimi Green Dress"
            size="XL"
            color="Green"
            price="47.99"
            quantity={1}
          />
        </View>
        <View style={{marginVertical: 15, marginHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
              }}>
              Product Price
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 20,
                color: '#000',
              }}>
              $157.99
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
              }}>
              Shipping
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 20,
                color: '#000',
              }}>
              Free
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              borderWidth: 0.8,
              borderColor: '#e8e8e8',
              marginVertical: 10,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
              }}>
              Sub Total
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 20,
                color: '#000',
              }}>
              $157.99
            </Text>
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#343434',
              marginHorizontal: 20,
              paddingVertical: 15,
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('CheckoutShipping' as never)}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                color: '#fff',
              }}>
              Proceed to Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductCart;
