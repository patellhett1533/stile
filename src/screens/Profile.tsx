import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SectionTab from '../components/SectionTab';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const Profile = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 70}}>
        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              marginTop: 60,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
              }}>
              <Image
                source={require('../assets/images/user_logo.png')}
                resizeMode="contain"
                style={{
                  borderRadius: 999,
                  width: 60,
                  height: 60,
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
                    color: '#000',
                  }}>
                  Sunie Pham
                </Text>
                <Text style={{fontFamily: 'Poppins-Regular'}}>
                  sunie@gmail.com
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile' as never)}>
              <Image
                source={require('../assets/images/setting.png')}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 40}}>
            <SectionTab
              img={require('../assets/images/location_active.png')}
              title="Address"
              link="Address"
            />
            <SectionTab
              img={require('../assets/images/wallet_active.png')}
              title="Payment Method"
              link="PaymentMethod"
            />
            <SectionTab
              img={require('../assets/images/voucher.png')}
              title="Voucher"
              link="Voucher"
            />
            <SectionTab
              img={require('../assets/images/whishlist.png')}
              title="My Wishlist"
              link="Wishlist"
            />
            <SectionTab
              img={require('../assets/images/rate_app.png')}
              title="Rate This App"
              link="RateApp"
            />
            <SectionTab
              img={require('../assets/images/logout.png')}
              title="Logout"
              hideArrow={true}
              link="Logout"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
