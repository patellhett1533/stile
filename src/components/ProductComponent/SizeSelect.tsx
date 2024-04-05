import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {};

const SizeSelect = (props: Props) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 16,
          color: '#777e90',
        }}>
        Size
      </Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: '#fafafa',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              color: '#C5C5C5',
            }}>
            S
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: '#fafafa',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              color: '#C5C5C5',
            }}>
            M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: '#515151',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              color: '#fff',
            }}>
            L
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SizeSelect;
