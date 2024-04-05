import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import NestedHeader from '../../components/NestedHeader';

type Props = {};

const EditProfile = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Update Profile" />
        <View style={{marginHorizontal: 20, marginTop: 40}}>
          <View
            style={{
              position: 'relative',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/user_logo.png')}
              resizeMode="contain"
              style={{borderRadius: 999, width: 100, height: 100}}
            />
            <View
              style={{
                position: 'absolute',
                left: '55%',
                bottom: 0,
                backgroundColor: '#343434',
                padding: 5,
                borderRadius: 999,
              }}>
              <Image
                source={require('../../assets/images/edit_photo.png')}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            </View>
          </View>
          <View style={{marginVertical: 50}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 30,
              }}>
              <TextInput
                style={style.inputBox}
                placeholder="First Name"
                placeholderTextColor={'#000000'}
                secureTextEntry={true}
              />
              <TextInput
                style={style.inputBox}
                placeholder="Last Name"
                placeholderTextColor={'#000000'}
                secureTextEntry={true}
              />
            </View>
            <TextInput
              style={style.inputBox}
              placeholder="Email"
              placeholderTextColor={'#000000'}
              secureTextEntry={true}
            />
            <TextInput
              style={style.inputBox}
              placeholder="Mobile Number"
              placeholderTextColor={'#000000'}
              secureTextEntry={true}
            />
          </View>
          <View style={{marginVertical: 20}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#343434',
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 999,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                  color: '#fff',
                }}>
                Save Changes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  inputBox: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

export default EditProfile;
