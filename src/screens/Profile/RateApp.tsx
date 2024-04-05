import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import NestedHeader from '../../components/NestedHeader';

type Props = {};

const RateApp = (props: Props) => {
  const star = new Array(5).fill(null);
  const [rate, setRate] = useState(0);
  const [isReviewed, setIsReviewed] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Share Your Feedback" />
        <View style={{marginHorizontal: 20, marginTop: 40}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 18,
              alignSelf: 'center',
              color: '#000',
              marginBottom: 30,
            }}>
            What is your opinion of GemStore?
          </Text>
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
                        source={require('../../assets/images/rate.png')}
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
                      source={require('../../assets/images/rate-outline.png')}
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
              placeholder="Would you like to write anything about this platform?"
              style={{
                textAlignVertical: 'top',
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
              }}
              numberOfLines={10}
              multiline
            />
          </View>

          <View style={{marginVertical: 30}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#343434',
                paddingVertical: 15,
                alignItems: 'center',
                borderRadius: 999,
              }}
              onPress={() => setIsReviewed(true)}>
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
      {isReviewed && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '80%',
              paddingHorizontal: 15,
              paddingVertical: 20,
              borderRadius: 10,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'rgb(237, 243,242)',
                borderRadius: 999,
                padding: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{backgroundColor: '#508a7b', borderRadius: 999}}>
                <Image
                  source={require('../../assets/images/checked.png')}
                  resizeMode="contain"
                  style={{width: 50, height: 50}}
                />
              </View>
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 20,
                textAlign: 'center',
                marginVertical: 20,
                color: '#000',
              }}>
              Thank you for your feedback!
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                textAlign: 'center',
                marginBottom: 20,
              }}>
              We appreciated your feedback. We’ll use your feedback to improve
              your experience.
            </Text>
            <View style={{marginVertical: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#343434',
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  alignItems: 'center',
                  borderRadius: 999,
                }}
                onPress={() => setIsReviewed(false)}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                    color: '#fff',
                  }}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default RateApp;
