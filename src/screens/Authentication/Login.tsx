import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import {LoginScreenProps} from '../../interface/commonType';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login: React.FC<LoginScreenProps> = ({navigation}) => {
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        // @ts-ignore
        navigation.navigate('onboard');
      }
    });
  }, []);
  return (
    <View style={style.login_container}>
      <View style={style.login_title}>
        <Text style={style.login_header}>Log into</Text>
        <Text style={style.login_header}>your account</Text>
      </View>
      <View style={style.login_form}>
        <TextInput
          style={style.login_form_input}
          placeholder="Email address"
          placeholderTextColor={'#000000'}
        />
        <TextInput
          style={style.login_form_input}
          placeholder="Password"
          placeholderTextColor={'#000000'}
          secureTextEntry={true}
        />
      </View>
      <View style={style.login_forgot_password}>
        <TouchableOpacity>
          <Text style={style.login_forgot_password_text}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.login_button}>
        <TouchableOpacity style={style.login_button_content}>
          <Text style={style.login_button_text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.login_ortext}>or log in with</Text>
      <View style={style.login_option}>
        <TouchableOpacity style={style.login_option_section}>
          <Image
            source={require('../../assets/images/Apple.png')}
            style={style.login_option_logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.login_option_section}>
          <Image
            source={require('../../assets/images/Google.png')}
            style={style.login_option_logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.login_option_section}>
          <Image
            source={require('../../assets/images/Facebook.png')}
            style={style.login_option_logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={style.dont_account}>
        <Text style={style.dont_account_text}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text
            style={style.dont_account_link}
            onPress={() => navigation.navigate('signup')}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  login_container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  login_title: {
    marginBottom: 48,
  },
  login_header: {
    fontSize: 30,
    width: '100%',
    lineHeight: 60,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  login_form: {
    marginBottom: 28,
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
  login_forgot_password: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  login_forgot_password_text: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  login_button: {
    alignItems: 'center',
    marginBottom: 16,
  },
  login_button_content: {
    paddingHorizontal: 45,
    paddingVertical: 15,
    backgroundColor: '#343434',
    borderRadius: 15,
    width: '100%',
  },
  login_button_text: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  login_ortext: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  login_option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  login_option_section: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_option_logo: {
    width: 30,
    height: 30,
  },
  dont_account: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  dont_account_text: {
    fontSize: 16,
    marginRight: 5,
    fontFamily: 'Poppins-Regular',
  },
  dont_account_link: {
    fontSize: 16,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
  },
});

export default Login;
