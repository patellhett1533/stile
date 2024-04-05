import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import NestedHeader from './NestedHeader';
import HorizontalLine from './HorizontalLine';
import {useNavigation} from '@react-navigation/native';

type Props = {
  active: string;
  step: string;
  hideLabel?: boolean;
  children: React.ReactNode;
  button: string;
  link: string;
};

const CheckoutLayout = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Checkout" />
        <View
          style={{
            marginVertical: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}>
          <Image
            source={
              props.active >= '1'
                ? require('../assets/images/location_active.png')
                : require('../assets/images/location.png')
            }
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
          <Text style={{color: '#c8c7cc', fontSize: 10}}>● ● ● ● ● ●</Text>
          <Image
            source={
              props.active >= '2'
                ? require('../assets/images/wallet_active.png')
                : require('../assets/images/wallet.png')
            }
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
          <Text style={{color: '#c8c7cc', fontSize: 10}}>● ● ● ● ● ●</Text>
          <Image
            source={
              props.active >= '3'
                ? require('../assets/images/success_active.png')
                : require('../assets/images/success.png')
            }
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          {!props.hideLabel && (
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                textTransform: 'uppercase',
                color: '#343434',
              }}>
              Step {props.active}
            </Text>
          )}
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 22,
              color: '#343434',
            }}>
            {props.step}
          </Text>
        </View>
        {props.children}
        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#343434',
              marginHorizontal: 20,
              paddingVertical: 15,
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate(props.link as never)}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                color: '#fff',
              }}>
              {props.button}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutLayout;
