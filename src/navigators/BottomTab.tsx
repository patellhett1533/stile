import {View, Text, Image, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import Order from '../screens/Order';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 90 : 70,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/images/home-active.png')
                    : require('../assets/images/home.png')
                }
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/images/explore-active.png')
                    : require('../assets/images/explore.png')
                }
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="shopping"
        component={Order}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/images/shopping-active.png')
                    : require('../assets/images/shopping.png')
                }
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/images/profile-active.png')
                    : require('../assets/images/profile.png')
                }
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
