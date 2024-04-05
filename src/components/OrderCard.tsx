import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {
  order: string;
  date: string;
  track: string;
  quantity: string;
  total: string;
  status: string;
};

const OrderCard = (props: Props) => {
  const navigation = useNavigation();
  let statusColor;

  if (props.status === 'pending') {
    statusColor = '#cf6212';
  } else if (props.status === 'delivered') {
    statusColor = '#009254';
  } else if (props.status === 'cancel') {
    statusColor = '#c50000';
  }

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 4,
        shadowOpacity: 0.2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{fontFamily: 'Poppins-Regular', fontSize: 18, color: '#000'}}>
          Order #{props.order}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            color: '#777e90',
          }}>
          {props.date}
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            color: '#777e90',
          }}>
          Tracking Number : <Text style={{color: '#000'}}>{props.track}</Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            color: '#777e90',
          }}>
          Quantity : <Text style={{color: '#000'}}>{props.quantity}</Text>
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            color: '#777e90',
          }}>
          Total :{' '}
          <Text style={{color: '#000', fontSize: 16}}>${props.total}</Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 12,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 18,
            color: statusColor,
            textTransform: 'uppercase',
          }}>
          {props.status}
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#777e90',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 999,
          }}
          onPress={() => navigation.navigate('OrderDetail' as never)}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 18}}>
            Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderCard;
