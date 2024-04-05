import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {};

const FilterDrawer = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fafafa',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        elevation: 5,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
      }}>
      <Image
        source={require('../assets/images/filter.png')}
        resizeMode="contain"
        style={{width: 30, height: 30}}
      />
    </TouchableOpacity>
  );
};

export default FilterDrawer;
