import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import OTPTextInput from 'react-native-otp-textinput';

type Props = {};

const VerificationCode = (props: Props) => {
  return (
    <View style={styles.verification_code}>
      <TouchableOpacity style={styles.back_button}>
        <Image
          style={styles.back_button_img}
          source={require('../assets/images/back.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.verification_title}>
        <Text style={styles.verification_header}>verification code</Text>
      </View>
      <View style={styles.verification_sub}>
        <Text style={styles.verification_sub_text}>
          Please enter the verification code we sent to your email address
        </Text>
      </View>
      <View style={styles.verification_form}>
        <OTPTextInput
          inputCount={4}
          tintColor={'#343434'}
          textInputStyle={styles.verification_code_input}
          autoFocus={true}
        />
      </View>
      <View style={styles.resend_code}>
        <Text style={styles.resend_code_text}>Resend in 01:27</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  verification_code: {
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
  verification_title: {
    marginTop: 35,
  },
  verification_header: {
    fontSize: 30,
    width: '100%',
    lineHeight: 60,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  verification_sub: {
    marginTop: 18,
  },
  verification_sub_text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  verification_form: {
    marginTop: 55,
  },
  verification_code_input: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 50,
    fontFamily: 'Poppins-Regular',
  },
  resend_code: {
    marginTop: 60,
  },
  resend_code_text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default VerificationCode;
