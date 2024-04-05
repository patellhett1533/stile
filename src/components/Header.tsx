import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 24,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {/* <View>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require('../assets/images/menu.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View> */}
      <View>
        <Text
          style={{fontFamily: 'Poppins-Bold', fontSize: 20, color: '#343434'}}>
          {props.title}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification' as never)}>
          <Image
            source={require('../assets/images/notification.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
