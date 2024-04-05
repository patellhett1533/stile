import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import NestedHeader from '../components/NestedHeader';

type Props = {};

const Notification = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Notification" />
        <View style={{marginHorizontal: 20, marginTop: 20, gap: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              elevation: 5,
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#000',
              }}>
              Good morning! Get 20% Voucher
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              Summer sale up to 20% off. Limited voucher. Get now!! 😜
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              elevation: 5,
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#000',
              }}>
              Special offer just for you
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              New Autumn Collection 30% off
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              elevation: 5,
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#000',
              }}>
              Holiday sale 50%
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              Tap to get 50% voucher.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              elevation: 5,
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#000',
              }}>
              Order delivered succeesfully
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              View order detail and don't forgot to give review of product
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
