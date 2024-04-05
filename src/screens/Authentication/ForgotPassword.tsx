import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type Props = {};

const ForgotPassword = (props: Props) => {
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
        <Text style={styles.forgot_header}>forgot password ?</Text>
      </View>
      <View style={styles.forgot_sub}>
        <Text style={styles.forgot_sub_text}>
          Enter email associated with your account and we’ll send and email with
          intructions to reset your password
        </Text>
      </View>
      <View style={styles.forgot_form}>
        <Image
          style={styles.email_img}
          source={require('../assets/images/email.png')}
          resizeMode="contain"
        />
        <TextInput
          style={styles.forgot_form_input}
          placeholder="Email address"
          placeholderTextColor={'#000000'}
        />
      </View>
      <View style={styles.forgot_button}>
        <TouchableOpacity style={styles.forgot_button_content}>
          <Text style={styles.forgot_button_text}>Continue</Text>
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
  forgot_form: {
    marginTop: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    fontFamily: 'Poppins-Regular',
    flexDirection: 'row',
    alignItems: 'center',
  },
  email_img: {
    marginBottom: 5,
    marginEnd: 10,
    width: 20,
    height: 20,
  },
  forgot_form_input: {
    paddingHorizontal: 5,
    width: '100%',
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

export default ForgotPassword;
