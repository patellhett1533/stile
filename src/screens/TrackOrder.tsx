import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import NestedHeader from '../components/NestedHeader';
import ShippingTimeline from '../components/ShippingTimeline';

type Props = {};

const TrackOrder = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Track Order" />
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
            Delivered on : <Text style={{color: '#000'}}>15/04/2024</Text>
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              marginTop: 10,
            }}>
            Tracking Number : <Text style={{color: '#000'}}>IK287368838</Text>
          </Text>
        </View>
        <ShippingTimeline />
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: '#fff',
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            borderRadius: 10,
          }}>
          <Image
            source={require('../assets/images/give_rating.png')}
            resizeMode="contain"
            style={{width: 70, height: 60}}
          />
          <View>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
              Don’t forget to rate
            </Text>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
              Rate product to get 5 points for collect.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrackOrder;
