import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import {SignupScreenProps} from '../../interface/commonType';

const Signup: React.FC<SignupScreenProps> = ({navigation}) => {
  return (
    <View style={style.signup_container}>
      <View style={style.signup_title}>
        <Text style={style.signup_header}>Create</Text>
        <Text style={style.signup_header}>your account</Text>
      </View>
      <View style={style.signup_form}>
        <TextInput
          style={style.signup_form_input}
          placeholder="Email address"
          placeholderTextColor={'#000000'}
        />
        <TextInput
          style={style.signup_form_input}
          placeholder="Password"
          placeholderTextColor={'#000000'}
          secureTextEntry={true}
        />
        <TextInput
          style={style.signup_form_input}
          placeholder="Confirm password"
          placeholderTextColor={'#000000'}
          secureTextEntry={true}
        />
      </View>
      <View style={style.signup_button}>
        <TouchableOpacity style={style.signup_button_content}>
          <Text style={style.signup_button_text}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.signup_ortext}>or sign up with</Text>
      <View style={style.signup_option}>
        <TouchableOpacity style={style.signup_option_section}>
          <Image
            source={require('../../assets/images/Apple.png')}
            style={style.signup_option_logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.signup_option_section}>
          <Image
            source={require('../../assets/images/Google.png')}
            style={style.signup_option_logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.signup_option_section}>
          <Image
            source={require('../../assets/images/Facebook.png')}
            style={style.signup_option_logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={style.dont_account}>
        <Text style={style.dont_account_text}>Already have an account?</Text>
        <TouchableOpacity>
          <Text
            style={style.dont_account_link}
            onPress={() => navigation.navigate('login')}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  signup_container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  signup_title: {
    marginBottom: 48,
  },
  signup_header: {
    fontSize: 30,
    width: '100%',
    lineHeight: 60,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  signup_form: {
    marginBottom: 28,
    fontFamily: 'Poppins-Regular',
  },
  signup_form_input: {
    marginBottom: 20,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  signup_button: {
    alignItems: 'center',
    marginBottom: 16,
  },
  signup_button_content: {
    paddingHorizontal: 45,
    paddingVertical: 15,
    backgroundColor: '#343434',
    borderRadius: 15,
    width: '100%',
  },
  signup_button_text: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  signup_ortext: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  signup_option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  signup_option_section: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup_option_logo: {
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

export default Signup;
