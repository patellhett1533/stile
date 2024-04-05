import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductComponent/ProductCard';
import ProductTab from '../components/ProductTab';
import CollectionBanner from '../components/CollectionBanner';

type Props = {};

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 80}}>
        <Header title="Gemstore" />
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          {/* category list slider */}
          {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', gap: 30}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View
                  style={{
                    backgroundColor: '#343434',
                    width: 60,
                    height: 60,
                    borderRadius: 999,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/women.png')}
                    resizeMode="contain"
                    style={{width: 35, height: 35}}
                  />
                </View>
                <Text>Women</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View
                  style={{
                    backgroundColor: '#f3f3f3',
                    width: 60,
                    height: 60,
                    borderRadius: 999,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/men.png')}
                    resizeMode="contain"
                    style={{width: 35, height: 35}}
                  />
                </View>
                <Text>Men</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View
                  style={{
                    backgroundColor: '#f3f3f3',
                    width: 60,
                    height: 60,
                    borderRadius: 999,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/accesories.png')}
                    resizeMode="contain"
                    style={{width: 35, height: 35}}
                  />
                </View>
                <Text>Accesories</Text>
              </View>
            </View>
          </ScrollView> */}
          {/* collection banner */}
          <View
            style={{
              width: '100%',
            }}>
            <Image
              source={require('../assets/images/collection_22.png')}
              resizeMode="cover"
              style={{width: '100%', height: 200, borderRadius: 20}}
            />
            <Text
              style={{
                fontSize: 25,
                color: '#fff',
                position: 'absolute',
                right: 0,
                top: 15,
                fontFamily: 'Poppins-Bold',
                width: '45%',
              }}>
              Autumn Collection 2022
            </Text>
          </View>
          {/* feature product slider */}
          <View style={{marginTop: 30}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Regular',
                  color: '#000',
                }}>
                Feature Products
              </Text>
              <TouchableOpacity>
                <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular'}}>
                  Show All
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row', gap: 25}}>
                <ProductCard
                  img={require('../assets/images/product_1.png')}
                  title="Turtleneck Sweater"
                  price="39.99"
                />
                <ProductCard
                  img={require('../assets/images/product_2.png')}
                  title="Long Sleev Dress"
                  price="45.00"
                />
                <ProductCard
                  img={require('../assets/images/product_3.png')}
                  title="Sportwear Set"
                  price="80.00"
                />
              </View>
            </ScrollView>
          </View>
        </View>
        {/* new collection banner */}
        <View
          style={{
            width: '100%',
            backgroundColor: '#f8f8fa',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <View>
            <Text style={{fontFamily: 'Poppins-ExtraLight', fontSize: 20}}>
              New Collection
            </Text>
            <Text
              style={{width: '60%', fontFamily: 'Poppins-Light', fontSize: 24}}>
              HANG OUT & PARTY
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/new_collection.png')}
              resizeMode="cover"
              style={{width: 100, height: 160}}
            />
            <View
              style={{
                width: 130,
                height: 130,
                borderRadius: 999,
                backgroundColor: '#e2e2e2',
                opacity: 0.5,
                position: 'absolute',
                alignSelf: 'center',
                top: '2%',
                zIndex: -2,
              }}></View>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 999,
                backgroundColor: '#e2e2e2',
                position: 'absolute',
                alignSelf: 'center',
                top: '11%',
                zIndex: -1,
              }}></View>
          </View>
        </View>
        {/* recommended poroduct */}
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Regular',
                color: '#000',
              }}>
              Recommended
            </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular'}}>
                Show All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', gap: 20}}>
              <ProductTab
                img={require('../assets/images/tab_1.png')}
                title="White Fashion Hoodie"
                price="29.00"
              />
              <ProductTab
                img={require('../assets/images/tab_2.png')}
                title="Cotton T-shirt"
                price="30.00"
              />
            </View>
          </ScrollView>
        </View>
        {/* top collection banners */}
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Regular',
                color: '#000',
              }}>
              Top Collection
            </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular'}}>
                Show All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <CollectionBanner
          sub="Sale upto 40%"
          title="for slim & beauty"
          img={require('../assets/images/top_collection1.png')}
        />
        <CollectionBanner
          sub="Premium Design"
          title="for slim & beauty"
          img={require('../assets/images/top_collection2.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
