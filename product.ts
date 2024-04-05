import {ImageSourcePropType} from 'react-native';

interface Product {
  title: string;
  price: string;
  mrp: string;
  img: ImageSourcePropType;
  liked: boolean;
  rate: number;
  rating: number;
}

export const products: Product[] = [
  {
    title: 'Linen Dress',
    price: '52.00',
    mrp: '90.00',
    img: require('./src/assets/images/dress1.png'),
    liked: true,
    rate: 5,
    rating: 67,
  },
  {
    title: 'Filted Waist Dress',
    price: '47.99',
    mrp: '82.00',
    img: require('./src/assets/images/dress2.png'),
    liked: false,
    rate: 4,
    rating: 53,
  },
  {
    title: 'Maxi Dress',
    price: '68',
    mrp: '',
    img: require('./src/assets/images/dress3.png'),
    liked: false,
    rate: 4,
    rating: 46,
  },
  {
    title: 'Tie Back Mini Dress',
    price: '59.00',
    mrp: '',
    img: require('./src/assets/images/dress4.png'),
    liked: false,
    rate: 5,
    rating: 38,
  },
  {
    title: 'Ohara Dress',
    price: '85.00',
    mrp: '',
    img: require('./src/assets/images/dress5.png'),
    liked: false,
    rate: 4,
    rating: 50,
  },
  {
    title: 'Tie Back Mini Dress',
    price: '67.00',
    mrp: '',
    img: require('./src/assets/images/dress6.png'),
    liked: true,
    rate: 5,
    rating: 39,
  },
  {
    title: 'Leaves Green Dress',
    price: '64.00',
    mrp: '',
    img: require('./src/assets/images/dress7.png'),
    liked: false,
    rate: 5,
    rating: 83,
  },
  {
    title: 'Off Shoulder Dress',
    price: '78.99',
    mrp: '',
    img: require('./src/assets/images/dress8.png'),
    liked: false,
    rate: 4,
    rating: 25,
  },
];
