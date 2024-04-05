import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  onboard: undefined;
  login: undefined;
  signup: undefined;
  Main: undefined;
  Products: undefined;
  ProductsDetail: undefined;
  ProductsCart: undefined;
  CheckoutShipping: undefined;
  CheckoutPayment: undefined;
  CheckoutComplate: undefined;
  OrderDetail: undefined;
  RateProduct: undefined;
  TrackOrder: undefined;
  Notification: undefined;
  Address: undefined;
  PaymentMethod: undefined;
  AddNewCard: undefined;
  Voucher: undefined;
  Wishlist: undefined;
  EditProfile: undefined;
  RateApp: undefined;
};

export type OnboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'onboard'
>;
export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'login'
>;
export type SignupScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'signup'
>;
