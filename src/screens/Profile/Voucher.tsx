import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import NestedHeader from '../../components/NestedHeader';
import VoucherBox from '../../components/Box/VoucherBox';

type Props = {};

const Voucher = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Voucher" />
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <VoucherBox
            percent="50"
            name="Black Friday"
            sub="Sale off 50%"
            code="fridaysale"
            exp="20 Dec"
          />
          <VoucherBox
            percent="30"
            name="Holiday Sale"
            sub="Sale off 30%"
            code="holiday30"
            exp="23 Dec"
          />
          <VoucherBox
            percent="20"
            name="First Order"
            sub="20% off "
            code="welcome"
            exp="29 Dec"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Voucher;
