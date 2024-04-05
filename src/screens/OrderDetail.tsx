import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import NestedHeader from '../components/NestedHeader';
import HorizontalLine from '../components/HorizontalLine';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const OrderDetail = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Order #1514" />
        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              backgroundColor: '#343434',
              marginVertical: 40,
              paddingHorizontal: 25,
              paddingVertical: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 10,
            }}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                }}>
                Your order is delivered
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                }}>
                Rate product to get 5 points for collect.
              </Text>
            </View>
            <Image
              source={require('../assets/images/delivered.png')}
              resizeMode="contain"
              style={{width: 50, height: 50}}
            />
          </View>
          <View
            style={{
              gap: 15,
              backgroundColor: '#fff',
              elevation: 5,
              paddingVertical: 20,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                Order Number
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  color: '#000',
                }}>
                #1514
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                Tracking Number
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  color: '#000',
                }}>
                IK987362341
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                Delivery address
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  color: '#000',
                }}>
                SBI Building...
              </Text>
            </View>
          </View>
          <View
            style={{
              gap: 15,
              backgroundColor: '#fff',
              elevation: 5,
              paddingVertical: 20,
              paddingHorizontal: 15,
              borderRadius: 10,
              marginTop: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                Maxi Dress
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  color: '#000',
                }}>
                $68.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                Linen Dress
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  color: '#000',
                }}>
                $52.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                Sub Total
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  color: '#000',
                }}>
                $120.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                Shipping
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  color: '#000',
                }}>
                $00.00
              </Text>
            </View>
            <HorizontalLine marginVertical={5} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                Total
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  color: '#000',
                }}>
                $120.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 20,
              marginTop: 20,
            }}>
            <View style={{marginVertical: 20}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#777e90',
                  paddingVertical: 15,
                  alignItems: 'center',
                  borderRadius: 999,
                  paddingHorizontal: 30,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                    color: '#777e90',
                  }}>
                  Return Home
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 20}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#343434',
                  paddingVertical: 15,
                  alignItems: 'center',
                  borderRadius: 999,
                  paddingHorizontal: 30,
                }}
                onPress={() => navigation.navigate('RateProduct' as never)}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                    color: '#fff',
                  }}>
                  Rate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetail;
