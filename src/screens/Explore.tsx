import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CollectionBanner from '../components/CollectionBanner';
import FilterDrawer from '../components/FilterDrawer';
import CategoryBadge from '../components/CategoryBadge';
import ProductCard from '../components/ProductComponent/ProductCard';

type Props = {};

const categories = [
  {title: 'Jacket', count: '128'},
  {title: 'Skirt', count: '40'},
  {title: 'Dress', count: '36'},
  {title: 'Sweater', count: '24'},
  {title: 'Jeans', count: '14'},
  {title: 'Tshirt', count: '12'},
  {title: 'Pants', count: '9'},
];

const renderItem = (title: string, count: string, i: number) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 20,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#bebfc4',
    }}
    key={i}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}>
      <Text
        style={{fontFamily: 'Poppins-Regular', fontSize: 20, color: '#000'}}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>{count} items</Text>
        <Image
          source={require('../assets/images/right_arrow.png')}
          resizeMode="contain"
          style={{width: 15, height: 15}}
        />
      </View>
    </View>
  </TouchableOpacity>
);

const Explore = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 70}}>
        <Header title="Explore" />

        {/* search bar with filter */}
        <View
          style={{
            marginTop: 30,
            marginHorizontal: 20,
            flexDirection: 'row',
            gap: 10,
          }}>
          <View
            style={{
              backgroundColor: '#fafafa',
              borderRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              elevation: 5,
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              flex: 1,
            }}>
            <Image
              source={require('../assets/images/explore.png')}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
            <TextInput
              placeholder="Search"
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                width: '100%',
              }}
            />
          </View>
          <FilterDrawer />
        </View>

        {/* search history and popular product */}
        <View
          style={{
            marginTop: 30,
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#bebfc4',
              }}>
              Recent Searches
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/delete.png')}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: 15,
            }}>
            <CategoryBadge sub="Sunglasses" />
            <CategoryBadge sub="Sweater" />
            <CategoryBadge sub="Hoodies" />
            <CategoryBadge sub="Casual Watchs" />
          </View>
          {/* popular collection products suggestion */}
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
                Popular this week
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
                  img={require('../assets/images/popular_1.png')}
                  title="Lihua Tunic White"
                  price="53.00"
                />
                <ProductCard
                  img={require('../assets/images/popular_2.png')}
                  title="Skirt Dress"
                  price="34.00"
                />
                <ProductCard
                  img={require('../assets/images/popular_3.png')}
                  title="Kimi Green Dress"
                  price="47.99"
                />
              </View>
            </ScrollView>
          </View>
        </View>

        {/* search result */}
        {/* <View style={{marginTop: 20}}>
          {categories.map((item, i) => {
            return renderItem(item.title, item.count, i);
          })}
        </View> */}

        {/* explore content */}
        <View style={{marginVertical: 20}}>
          <CollectionBanner
            sub=""
            title="clothing"
            img={require('../assets/images/fashion_1.png')}
            background="#a3a798"
            dark={true}
            text="#fff"
          />
          <CollectionBanner
            sub=""
            title="Premium Purse"
            img={require('../assets/images/fashion_2.png')}
            background="#898280"
            resize="contain"
            dark={true}
            text="#fff"
          />
          <CollectionBanner
            sub=""
            title="Quality Footware"
            img={require('../assets/images/fashion_3.png')}
            background="#44565c"
            dark={true}
            text="#fff"
          />
          <CollectionBanner
            sub=""
            title="Casual Cloth"
            img={require('../assets/images/fashion_4.png')}
            background="#b9aeb2"
            dark={true}
            text="#fff"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
