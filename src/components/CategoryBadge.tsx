import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

type Props = {
  sub: string;
};

const CategoryBadge = (props: Props) => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#fafafa',
        alignSelf: 'center',
      }}>
      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
        {props.sub}
      </Text>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/close.png')}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryBadge;
