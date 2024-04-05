import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

// @ts-ignore
import onboard1 from '../../assets/images/onboard1.png';
// @ts-ignore
import onboard2 from '../../assets/images/onboard2.png';
// @ts-ignore
import onboard3 from '../../assets/images/onboard3.png';
import {OnboardScreenProps} from '../../interface/commonType';

type Props = {};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const onboardingContent = [
  {
    id: 1,
    title: 'Discover something new',
    sub: 'Special new arrivals just for you',
    img: onboard1,
  },
  {
    id: 2,
    title: 'Update trendy outfit',
    sub: 'Favorite brands and hottest trends',
    img: onboard2,
  },
  {
    id: 3,
    title: 'Explore your true style',
    sub: 'Relax and let us bring the style to you',
    img: onboard3,
  },
];

const Onboarding: React.FC<OnboardScreenProps> = ({navigation}) => {
  const [onboardSlider, setOnboardSlider] = useState(0);

  const handleNext = () => {
    if (onboardSlider < 2) {
      setOnboardSlider(prev => prev + 1);
    }
  };
  const handleRedirect = () => {
    // @ts-ignore
    navigation.replace('login');
  };
  return (
    <>
      <View style={style.white_bg}></View>
      {onboardSlider < 2 && (
        <TouchableOpacity style={style.skip_button} onPress={handleRedirect}>
          <Text style={style.skip_button_text}>SKIP</Text>
        </TouchableOpacity>
      )}
      <View style={style.onboarding_content}>
        <Text style={style.onboarding_title}>
          {onboardingContent[onboardSlider].title}
        </Text>
        <Text style={style.onboarding_sub}>
          {onboardingContent[onboardSlider].sub}
        </Text>
        <View style={style.onboard_image}>
          <Image
            source={onboardingContent[onboardSlider].img}
            style={style.onboard_image_img}
            resizeMode="contain"
          />
        </View>
        <View style={style.onboard_indicator}>
          <View
            style={[
              style.onboard_indicator_dot,
              onboardSlider === 0 && style.onboard_active_indicator_dot,
            ]}></View>
          <View
            style={[
              style.onboard_indicator_dot,
              onboardSlider === 1 && style.onboard_active_indicator_dot,
            ]}></View>
          <View
            style={[
              style.onboard_indicator_dot,
              onboardSlider === 2 && style.onboard_active_indicator_dot,
            ]}></View>
        </View>
        <TouchableOpacity
          style={style.next_button}
          onPress={onboardSlider === 2 ? handleRedirect : handleNext}>
          <Text style={style.next_button_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  white_bg: {
    width: '100%',
    height: '40%',
    backgroundColor: '#464447',
    position: 'absolute',
    bottom: 0,
  },
  skip_button: {
    position: 'absolute',
    top: '3%',
    right: '5%',
  },
  skip_button_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  onboarding_content: {
    height: windowHeight,
    width: windowWidth,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboarding_title: {
    fontSize: 28,
    width: '100%',
    lineHeight: 60,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  onboarding_sub: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginBottom: 30,
  },
  onboard_image: {
    width: 261,
    height: 368,
    backgroundColor: '#e7e8e9',
    paddingTop: 25,
    borderRadius: 10,
  },
  onboard_image_img: {
    width: '100%',
    height: '100%',
  },
  onboard_indicator: {
    marginTop: 55,
    flexDirection: 'row',
    gap: 20,
  },
  onboard_indicator_dot: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  onboard_active_indicator_dot: {
    borderWidth: 0,
    backgroundColor: '#fff',
  },
  next_button: {
    marginTop: 25,
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: '#fff',
  },
  next_button_text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Onboarding;
