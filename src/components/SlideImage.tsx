import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

type Props = {
  img: any;
};

const SlideImage = (props: Props) => {
  return (
    <View>
      <Image
        source={require('../assets/images/demo_product1.png')}
        resizeMode="contain"
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height / 2,
        }}
      />
    </View>
  );
};

export default SlideImage;
