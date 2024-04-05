import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title?: string;
};

const NestedHeader = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
      }}>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOffset: {width: 2, height: 5},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          style={{width: 15, height: 15, marginEnd: 2}}
          source={require('../assets/images/back.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {props.title && (
        <Text
          style={{fontFamily: 'Poppins-Medium', fontSize: 20, color: '#000'}}>
          {props.title}
        </Text>
      )}
    </View>
  );
};

export default NestedHeader;
