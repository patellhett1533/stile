import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {
  img: ImageSourcePropType;
  title: string;
  hideArrow?: boolean;
  link: string;
};

const SectionTab = (props: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
      }}
      onPress={() => navigation.navigate(props.link as never)}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <Image
          source={props.img}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 18,
            color: '#000',
          }}>
          {props.title}
        </Text>
      </View>
      {!props.hideArrow && (
        <Image
          source={require('../assets/images/right_arrow.png')}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      )}
    </TouchableOpacity>
  );
};

export default SectionTab;
