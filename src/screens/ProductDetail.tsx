import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import NestedHeader from '../components/NestedHeader';
import ProductImageSlider from '../components/ProductComponent/ProductImageSlider';
import HorizontalLine from '../components/HorizontalLine';
import ColorSelect from '../components/ProductComponent/ColorSelect';
import SizeSelect from '../components/ProductComponent/SizeSelect';
import RatingBox from '../components/ProductComponent/RatingBox';
import RatingStar from '../components/ProductComponent/RatingStar';
import ReviewList from '../components/ProductComponent/ReviewList';
import ProductCard from '../components/ProductComponent/ProductCard';
import Button from '../components/Button';

type Props = {};

const ProductDetail = (props: Props) => {
  const totalRate = new Array(5).fill(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader />
        <ProductImageSlider />
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 40,
            paddingBottom: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: '#fff',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 22,
                color: '#000',
              }}>
              Sportware Set
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
                color: '#000',
              }}>
              $80.99
            </Text>
          </View>
          <RatingStar rate={4} />
          <HorizontalLine />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <ColorSelect />
            <SizeSelect />
          </View>
          <HorizontalLine />
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                color: '#000',
              }}>
              Description
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#000',
                marginTop: 10,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              posuere, nisl nec consectetur aliquam, nunc ex tincidunt nisi,
              eget accumsan nunc metus sit amet sem. Suspendisse potenti.
              Phasellus sit amet nunc et risus.
            </Text>
          </View>
          <HorizontalLine />
          <RatingBox />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                47 Reviews
              </Text>
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                  <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
                    Write a Review
                  </Text>
                  <Image
                    source={require('../assets/images/write.png')}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <ReviewList
              img={require('../assets/images/review1.png')}
              name="Jennifer Rose"
              rate={4}
              time="16m ago"
              review="I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!"
            />
            <ReviewList
              img={require('../assets/images/review2.png')}
              name="Kelly Rihana"
              rate={5}
              time="33m ago"
              review="I'm very happy with order, It was delivered on and good quality. Recommended!"
            />
            <TouchableOpacity style={{marginTop: 20, alignSelf: 'center'}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  textDecorationLine: 'underline',
                }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <HorizontalLine />
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                color: '#000',
              }}>
              Similar Product
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row', gap: 25, marginTop: 20}}>
                <ProductCard
                  img={require('../assets/images/product_img1.png')}
                  title="Rise Crop Hoodie"
                  price="43.00"
                />
                <ProductCard
                  img={require('../assets/images/product_img2.png')}
                  title="Gym Crop Top"
                  price="39.99"
                />
                <ProductCard
                  img={require('../assets/images/product_img3.png')}
                  title="Sport Sweatshirt"
                  price="47.99"
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          flex: 1,
          width: '100%',
        }}>
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
