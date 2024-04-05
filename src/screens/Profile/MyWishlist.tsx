import {View, Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import NestedHeader from '../../components/NestedHeader';
import {products} from '../../../product';
import ProductCard from '../../components/ProductComponent/ProductCard';

type Props = {};

const MyWishlist = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="My Wishlist" />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 40,
            marginBottom: 20,
          }}>
          {products.map((product, index) => (
            <View key={index} style={{marginBottom: 10}}>
              <ProductCard
                title={product.title}
                img={product.img}
                price={product.price}
                mrp={product.mrp}
                width={Dimensions.get('window').width / 2}
                rate={product.rate}
                rating={product.rating}
                showLike={true}
                like={true}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyWishlist;
