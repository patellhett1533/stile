import {
  View,
  Text,
  FlatList,
  ImageSourcePropType,
  Animated,
  ViewToken,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {products} from '../../../product';
import SlideImage from '../SlideImage';
import SliderIndicator from '../SliderIndicator';

type Props = {};

const ProductImageSlider = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      const firstVisibleIndex = viewableItems[0]?.index || 0;
      setActiveIndex(firstVisibleIndex);
    },
  ).current;

  return (
    <View>
      <FlatList
        data={products.slice(0, 3)}
        renderItem={({item}) => <SlideImage img={item.img} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        style={{marginTop: 20}}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 50}}
      />
      <SliderIndicator data={3} active={activeIndex} />
    </View>
  );
};

export default ProductImageSlider;
