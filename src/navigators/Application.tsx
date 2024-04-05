import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Authentication/Login';
import Signup from '../screens/Authentication/Signup';
import Onboarding from '../screens/Authentication/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackParamList} from '../interface/commonType';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';
import ProductCart from '../screens/ProductCart';
import CheckoutShipping from '../screens/CheckoutShipping';
import CheckoutPayment from '../screens/CheckoutPayment';
import CheckoutComplate from '../screens/CheckoutComplate';
import OrderDetail from '../screens/OrderDetail';
import RateProduct from '../screens/RateProduct';
import TrackOrder from '../screens/TrackOrder';
import Notification from '../screens/Notification';
import Address from '../screens/Profile/Address';
import PaymentMethod from '../screens/Profile/PaymentMethod';
import AddNewCard from '../screens/Profile/AddNewCard';
import Voucher from '../screens/Profile/Voucher';
import MyWishlist from '../screens/Profile/MyWishlist';
import EditProfile from '../screens/Profile/EditProfile';
import RateApp from '../screens/Profile/RateApp';
import Home from '../screens/Home';
import DrawerMenu from './DrawerNavigation';
import BottomTab from './BottomTab';

function ApplicationNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsLaunched(true);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={BottomTab} />
        <Stack.Screen name="Products" component={ProductList} />
        <Stack.Screen name="ProductsDetail" component={ProductDetail} />
        <Stack.Screen name="ProductsCart" component={ProductCart} />
        <Stack.Screen name="CheckoutShipping" component={CheckoutShipping} />
        <Stack.Screen name="CheckoutPayment" component={CheckoutPayment} />
        <Stack.Screen name="CheckoutComplate" component={CheckoutComplate} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="RateProduct" component={RateProduct} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="AddNewCard" component={AddNewCard} />
        <Stack.Screen name="Voucher" component={Voucher} />
        <Stack.Screen name="Wishlist" component={MyWishlist} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="RateApp" component={RateApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
