import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import NestedHeader from '../components/NestedHeader';
import {products} from '../../product';
import ProductCard from '../components/ProductComponent/ProductCard';

interface Product {
  liked: boolean;
  title: string;
  price: string;
  img: ImageSourcePropType;
  mrp: string;
  rate: number;
  rating: number;
}

interface ProductGridProps {
  products: Product[];
}

const numColumns = 2;
const {width} = Dimensions.get('window');
const itemSize = width / numColumns;

const ProductList = () => {
  const renderProductItem = (product: Product, index: number) => {
    return (
      <View key={index} style={{marginBottom: 10}}>
        <ProductCard
          title={product.title}
          img={product.img}
          price={product.price}
          mrp={product.mrp}
          width={itemSize}
          rate={product.rate}
          rating={product.rating}
          showLike={true}
          like={product.liked}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NestedHeader title="Dresses" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 18}}>
            152 results
          </Text>
          <Image
            source={require('../assets/images/filter.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 20,
          }}>
          {products.map((product, index) => renderProductItem(product, index))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductList;
