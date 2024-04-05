import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CheckoutLayout from '../components/CheckoutLayout';

type Props = {};

const CheckoutShipping = (props: Props) => {
  return (
    <CheckoutLayout
      active="1"
      step="Shipping"
      button="Continue To Payment"
      link="CheckoutPayment">
      <View style={{marginHorizontal: 20, marginVertical: 10}}>
        <TextInput
          style={style.textInput}
          placeholder="First Name"
          placeholderTextColor={'#000000'}
        />
        <TextInput
          style={style.textInput}
          placeholder="Last Name"
          placeholderTextColor={'#000000'}
        />
        <TextInput
          style={style.textInput}
          placeholder="Street Address"
          placeholderTextColor={'#000000'}
        />
        <TextInput
          style={style.textInput}
          placeholder="City"
          placeholderTextColor={'#000000'}
        />
        <TextInput
          style={style.textInput}
          placeholder="State/Province"
          placeholderTextColor={'#000000'}
        />
        <TextInput
          style={style.textInput}
          placeholder="Pin Code"
          placeholderTextColor={'#000000'}
        />
        <TextInput
          style={style.textInput}
          placeholder="Mobile Number"
          placeholderTextColor={'#000000'}
        />
      </View>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 22,
            color: '#343434',
          }}>
          Shopping Method
        </Text>
        <View style={{marginVertical: 10}}>
          <View style={{marginVertical: 10}}>
            <View>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 18}}>
                Free - Cash On Delivery
              </Text>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14}}>
                Delivery From 5 to 8 business day
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <View>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 18}}>
                $ 9.90 - Cash On Delivery
              </Text>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14}}>
                Delivery From 3 to 5 business day
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <View>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 18}}>
                $ 9.90 - Cash On Delivery
              </Text>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14}}>
                Delivery From 2 to 3 business day
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 22,
            color: '#343434',
          }}>
          Coupon Code
        </Text>
        <TextInput
          style={style.textInputFill}
          placeholder="Have a code ? Type it here"
          placeholderTextColor={'#343434'}
        />
      </View>
    </CheckoutLayout>
  );
};

const style = StyleSheet.create({
  textInput: {
    marginBottom: 20,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  textInputFill: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: '#d6d6d6',
    color: '#343434',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

export default CheckoutShipping;
