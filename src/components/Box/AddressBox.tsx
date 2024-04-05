import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  address: string;
};

const AddressBox = (props: Props) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        elevation: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{fontFamily: 'Poppins-Regular', fontSize: 18, color: '#000'}}>
          {props.title}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#f80000',
              textDecorationLine: 'underline',
              fontSize: 16,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{fontFamily: 'Poppins-Regular', fontSize: 16, marginTop: 10}}>
        {props.address}
      </Text>
    </View>
  );
};

export default AddressBox;
