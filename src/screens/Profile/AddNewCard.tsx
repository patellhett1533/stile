import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import NestedHeader from '../../components/NestedHeader';
import Card from '../../components/Card';

type Props = {};

const AddNewCard = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Add New Card" />
        <View style={{marginHorizontal: 20, marginVertical: 30}}>
          <Card
            cover={require('../../assets/images/card_background1.png')}
            background={require('../../assets/images/card_design3.png')}
            card={require('../../assets/images/mastercard.png')}
            name="NAME"
            number="**** **** **** ****"
            valid="MM/YY"
          />
          <View style={{marginVertical: 20}}>
            <TextInput
              style={style.inputBox}
              placeholder="Cardholder Name"
              placeholderTextColor={'#000000'}
              secureTextEntry={true}
            />
            <TextInput
              style={style.inputBox}
              placeholder="Card Number"
              placeholderTextColor={'#000000'}
              secureTextEntry={true}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 30,
              }}>
              <TextInput
                style={style.inputBox}
                placeholder="Valid Thru"
                placeholderTextColor={'#000000'}
                secureTextEntry={true}
              />
              <TextInput
                style={style.inputBox}
                placeholder="CVV"
                placeholderTextColor={'#000000'}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{marginVertical: 30}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#343434',
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 999,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                  color: '#fff',
                }}>
                Add Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  inputBox: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

export default AddNewCard;
