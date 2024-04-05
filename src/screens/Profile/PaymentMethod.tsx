import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import NestedHeader from '../../components/NestedHeader';
import Card from '../../components/Card';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const PaymentMethod = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Payment" />
        <View style={{marginVertical: 40, marginHorizontal: 20}}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('AddNewCard' as never)}>
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
              cover={require('../../assets/images/card_background.png')}
              background={require('../../assets/images/card_design1.png')}
              card={require('../../assets/images/visa_white.png')}
              number="4364 1345 8932 8378"
              name="Sunie Pham"
              valid="05/24"
            />
            <Card
              cover={require('../../assets/images/card_background.png')}
              background={require('../../assets/images/card_design2.png')}
              card={require('../../assets/images/visa_white.png')}
              number="2315 2967 0606 1533"
              name="David Cook"
              valid="07/28"
            />
          </ScrollView>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              marginVertical: 20,
              fontSize: 16,
            }}>
            or link account with
          </Text>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
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
                source={require('../../assets/images/paypal.png')}
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
                source={require('../../assets/images/visa.png')}
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
                source={require('../../assets/images/mastercard.png')}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethod;
