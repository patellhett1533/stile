import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import Explore from '../screens/Explore';
import Shopping from '../screens/Order';
import Profile from '../screens/Profile';
import Language from '../screens/DrawerPage/Language';
import PrivacyPolicy from '../screens/DrawerPage/PrivacyPolicy';
import Terms from '../screens/DrawerPage/Terms';

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 150,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
              }}>
              <Image
                source={require('../assets/images/user_logo.png')}
                resizeMode="contain"
                style={{
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                }}
              />
              <View>
                <Text style={{fontFamily: 'Poppins-Regular'}}>Sunie Pham</Text>
                <Text style={{fontFamily: 'Poppins-Regular'}}>
                  sunie@gmail.com
                </Text>
              </View>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          width: 300,
          backgroundColor: '#fff',
          elevation: 5,
        },
        drawerActiveBackgroundColor: '#f4f5f6',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerShown: false,
        drawerLabelStyle: {
          color: '#000',
          fontSize: 14,
          marginLeft: -10,
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Drawer.Screen
        name="language"
        options={{
          drawerLabel: 'Language',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Image
              source={require('../assets/images/home-active.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
        component={Language}
      />
      <Drawer.Screen
        name="privacy-policy"
        options={{
          drawerLabel: 'Privacy Policy',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Image
              source={require('../assets/images/explore-active.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
        component={PrivacyPolicy}
      />
      <Drawer.Screen
        name="terms"
        options={{
          drawerLabel: 'Terms & Conditions',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Image
              source={require('../assets/images/shopping-active.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
        component={Terms}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: 'Profile',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Image
              source={require('../assets/images/profile-active.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
