import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  data: number;
  active?: number;
};

const SliderIndicator = (props: Props) => {
  const indicators = new Array(props.data).fill(null);
  return (
    <View
      style={{
        position: 'absolute',
        bottom: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
      }}>
      {indicators.map((_, i) => (
        <View
          key={i}
          style={
            i === props.active && {
              width: 15,
              height: 15,
              borderWidth: 1.5,
              borderColor: '#4f4f4f',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 999,
            }
          }>
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 5,
              backgroundColor: '#4f4f4f',
              margin: 5,
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default SliderIndicator;
