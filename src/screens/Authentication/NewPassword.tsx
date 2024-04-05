import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

type Props = {};

const NewPassword = (props: Props) => {
  return (
    <View style={styles.forgot_password}>
      <TouchableOpacity style={styles.back_button}>
        <Image
          style={styles.back_button_img}
          source={require('../assets/images/back.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.forgot_title}>
        <Text style={styles.forgot_header}>create new password</Text>
      </View>
      <View style={styles.forgot_sub}>
        <Text style={styles.forgot_sub_text}>
          Your new password must be different from previously used password
        </Text>
      </View>
      <View style={styles.login_form}>
        <TextInput
          style={styles.login_form_input}
          placeholder="New Password"
          placeholderTextColor={'#000000'}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.login_form_input}
          placeholder="Confirm Password"
          placeholderTextColor={'#000000'}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.forgot_button}>
        <TouchableOpacity style={styles.forgot_button_content}>
          <Text style={styles.forgot_button_text}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forgot_password: {
    marginHorizontal: 33,
    marginVertical: 53,
    flex: 1,
    flexDirection: 'column',
  },
  back_button: {
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
  },
  back_button_img: {
    width: 15,
    height: 15,
    marginEnd: 2,
  },
  forgot_title: {
    marginTop: 35,
  },
  forgot_header: {
    fontSize: 30,
    width: '100%',
    lineHeight: 60,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  forgot_sub: {
    marginTop: 18,
  },
  forgot_sub_text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  login_form: {
    marginTop: 55,
    fontFamily: 'Poppins-Regular',
  },
  login_form_input: {
    marginBottom: 20,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  forgot_button: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 16,
  },
  forgot_button_content: {
    paddingHorizontal: 45,
    paddingVertical: 15,
    backgroundColor: '#343434',
    borderRadius: 15,
    width: '100%',
  },
  forgot_button_text: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

export default NewPassword;
