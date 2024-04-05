import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {};

const ColorSelect = (props: Props) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 16,
          color: '#777e90',
        }}>
        Color
      </Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 999,
            backgroundColor: '#fff',
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 999,
              backgroundColor: '#e7c0a7',
            }}></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: '#050302',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: '#ee6969',
          }}></TouchableOpacity>
      </View>
    </View>
  );
};

export default ColorSelect;
