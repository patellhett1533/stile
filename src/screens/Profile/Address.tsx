import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import NestedHeader from '../../components/NestedHeader';
import AddressBox from '../../components/Box/AddressBox';

type Props = {};

const Address = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Delivery address" />
        <View style={{marginHorizontal: 20, marginVertical: 40, gap: 20}}>
          <AddressBox
            title="My Office"
            address="SBI Building, street 3, Software Park"
          />
          <AddressBox
            title="My Home"
            address="1234 Street Name, City Name, Country Name, Postal Code, Phone Number"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Address;
