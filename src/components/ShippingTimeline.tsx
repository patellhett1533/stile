import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {};

const shippingEvent = [
  {done: true, event: 'Sender is preparing to ship your order', date: '12/04'},
  {done: true, event: 'Sender has shipped your parcel', date: '12/04'},
  {done: true, event: 'Parcel is in transit', date: '13/04'},
  {done: true, event: 'Parcel is received at delivery Branch', date: '13/04'},
  {done: true, event: 'Parcel is out for delivery', date: '14/04'},
  {done: false, event: 'Parcel is successfully delivered', date: '14/04'},
];

const ShippingTimeline = (props: Props) => {
  return (
    <View style={{marginHorizontal: 20, marginVertical: 30}}>
      {shippingEvent.map((item, index) => (
        <View key={index}>
          {index !== 0 && (
            <View
              style={{
                width: 20,
                alignItems: 'center',
              }}>
              <Text>●</Text>
              <Text>●</Text>
              <Text>●</Text>
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
            }}>
            <View
              style={{
                width: 23,
                height: 23,
                borderWidth: 1,
                borderColor: '#343434',
                borderRadius: 999,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 999,
                  backgroundColor: '#343434',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item.done && (
                  <Image
                    source={require('../assets/images/checked.png')}
                    resizeMode="contain"
                    style={{width: 14, height: 14}}
                  />
                )}
              </View>
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#000',
              }}>
              {item.event}
            </Text>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
              {item.date}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ShippingTimeline;
