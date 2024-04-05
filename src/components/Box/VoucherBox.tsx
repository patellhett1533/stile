import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  percent: string;
  name: string;
  sub: string;
  code: string;
  exp: string;
};

const VoucherBox = (props: Props) => {
  return (
    <View
      style={{
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }}>
      <View
        style={{
          flex: 1,
          borderEndWidth: 2,
          borderStyle: 'dashed',
          borderEndColor: '#c3c3c3',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <View
            style={{
              backgroundColor: '#343434',
              padding: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#fff',
                fontSize: 20,
              }}>
              {props.percent}%
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#000',
                fontSize: 16,
              }}>
              {props.name}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              {props.sub}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#000',
                fontSize: 14,
              }}>
              Code : {props.code}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text>Exp</Text>
        <Text>{props.exp}</Text>
      </View>
    </View>
  );
};

export default VoucherBox;
