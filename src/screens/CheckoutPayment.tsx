import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import CheckoutLayout from '../components/CheckoutLayout';
import Card from '../components/Card';

type Props = {};

const CheckoutPayment = (props: Props) => {
  const [method, setMethod] = useState<string>('');
  return (
    <CheckoutLayout
      active="2"
      step="Payment"
      button="Place My Order"
      link="CheckoutComplate">
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: method === 'cash' ? '#343434' : '#fff',
              elevation: 5,
              alignSelf: 'center',
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 15,
              alignItems: 'center',
            }}
            onPress={() => setMethod('cash')}>
            <Image
              source={
                method === 'cash'
                  ? require('../assets/images/cash_active.png')
                  : require('../assets/images/cash.png')
              }
              resizeMode="contain"
              style={{width: 50, height: 50}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: method === 'cash' ? '#fff' : '#777a90',
              }}>
              Card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: method === 'card' ? '#343434' : '#fff',
              elevation: 5,
              alignSelf: 'center',
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 15,
              alignItems: 'center',
            }}
            onPress={() => setMethod('card')}>
            <Image
              source={
                method === 'card'
                  ? require('../assets/images/card_active.png')
                  : require('../assets/images/card.png')
              }
              resizeMode="contain"
              style={{width: 50, height: 50}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: method === 'card' ? '#fff' : '#777a90',
              }}>
              Card
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                color: '#000',
              }}>
              Choose your card
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#f20000', fontFamily: 'Poppins-Regular'}}>
                Add New +
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToAlignment="center"
            pagingEnabled
            style={{marginTop: 20}}>
            <Card
              cover={require('../assets/images/card_background.png')}
              background={require('../assets/images/card_design1.png')}
              card={require('../assets/images/visa_white.png')}
              number="4364 1345 8932 8378"
              name="Sunie Pham"
              valid="05/24"
            />
            <Card
              cover={require('../assets/images/card_background.png')}
              background={require('../assets/images/card_design2.png')}
              card={require('../assets/images/visa_white.png')}
              number="2315 2967 0606 1533"
              name="David Cook"
              valid="07/28"
            />
          </ScrollView>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            marginVertical: 20,
            fontSize: 16,
          }}>
          or checkout with
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#ccd2e3',
              alignSelf: 'center',
              paddingHorizontal: 25,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/images/paypal.png')}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#ccd2e3',
              alignSelf: 'center',
              paddingHorizontal: 25,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/images/visa.png')}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#ccd2e3',
              alignSelf: 'center',
              paddingHorizontal: 25,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/images/mastercard.png')}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 40, marginBottom: 20, marginHorizontal: 20}}>
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
      </View>
    </CheckoutLayout>
  );
};

export default CheckoutPayment;
