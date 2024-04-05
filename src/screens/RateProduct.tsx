import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import NestedHeader from '../components/NestedHeader';

type Props = {};

const RateProduct = (props: Props) => {
  const star = new Array(5).fill(null);
  const [rate, setRate] = useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Rate Product" />
        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              backgroundColor: '#343434',
              marginVertical: 40,
              paddingHorizontal: 25,
              paddingVertical: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/images/gift.png')}
              resizeMode="contain"
              style={{width: 30, height: 30, marginBottom: 5}}
            />
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
              }}>
              Rate product to get 5 points for collect.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 15,
            }}>
            {
              // eslint-disable-next-line react-native/no-inline-styles
              star.map((_, index) => {
                if (rate >= index + 1) {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setRate(index + 1)}>
                      <Image
                        source={require('../assets/images/rate.png')}
                        resizeMode="contain"
                        style={{width: 40, height: 40}}
                      />
                    </TouchableOpacity>
                  );
                }

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setRate(index + 1)}>
                    <Image
                      source={require('../assets/images/rate-outline.png')}
                      resizeMode="contain"
                      style={{width: 40, height: 40}}
                      key={index}
                    />
                  </TouchableOpacity>
                );
              })
            }
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              elevation: 5,
              marginVertical: 30,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Would you like to write anything about this product?"
              style={{
                textAlignVertical: 'top',
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
              }}
              numberOfLines={10}
              multiline
            />
          </View>
          <View style={{flexDirection: 'row', gap: 20}}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderStyle: 'dashed',
                alignSelf: 'center',
                borderColor: '#777e90',
                borderRadius: 20,
                padding: 20,
              }}>
              <Image
                source={require('../assets/images/gallery.png')}
                resizeMode="contain"
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderStyle: 'dashed',
                alignSelf: 'center',
                borderColor: '#777e90',
                borderRadius: 20,
                padding: 20,
              }}>
              <Image
                source={require('../assets/images/camera.png')}
                resizeMode="contain"
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 30}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#343434',
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 999,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                  color: '#fff',
                }}>
                Submit Review
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RateProduct;
