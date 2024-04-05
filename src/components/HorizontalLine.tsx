import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  marginVertical?: number;
};

const HorizontalLine = (props: Props) => {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        borderWidth: 0.8,
        borderColor: '#f3f3f6',
        marginVertical: props.marginVertical ?? 25,
      }}></View>
  );
};

export default HorizontalLine;
