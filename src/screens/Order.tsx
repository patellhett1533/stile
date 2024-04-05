import * as React from 'react';
import {ScrollView, Text, View, useWindowDimensions} from 'react-native';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  Route,
  TabBar,
} from 'react-native-tab-view';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import {order} from '../../order';

const PendingRoute = () => (
  <ScrollView
    style={{flex: 1, marginTop: 20}}
    showsVerticalScrollIndicator={false}>
    <View style={{gap: 20, marginBottom: 80}}>
      {order
        .filter(item => item.status === 'pending')
        .map((item, i) => (
          <OrderCard
            order={item.order}
            date={item.date}
            track={item.track}
            quantity={item.quantity}
            total={item.total}
            status={item.status}
            key={i}
          />
        ))}
    </View>
  </ScrollView>
);

const DeliveredRoute = () => (
  <ScrollView
    style={{flex: 1, marginTop: 20}}
    showsVerticalScrollIndicator={false}>
    <View style={{gap: 20, marginBottom: 80}}>
      {order
        .filter(item => item.status === 'delivered')
        .map((item, i) => (
          <OrderCard
            order={item.order}
            date={item.date}
            track={item.track}
            quantity={item.quantity}
            total={item.total}
            status={item.status}
            key={i}
          />
        ))}
    </View>
  </ScrollView>
);

const CancelRoute = () => (
  <ScrollView
    style={{flex: 1, marginTop: 20}}
    showsVerticalScrollIndicator={false}>
    <View style={{gap: 20, marginBottom: 80}}>
      {order
        .filter(item => item.status === 'cancel')
        .map((item, i) => (
          <OrderCard
            order={item.order}
            date={item.date}
            track={item.track}
            quantity={item.quantity}
            total={item.total}
            status={item.status}
            key={i}
          />
        ))}
    </View>
  </ScrollView>
);

const renderScene = SceneMap({
  pending: PendingRoute,
  delivered: DeliveredRoute,
  cancel: CancelRoute,
});

const Order = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'pending', title: 'Pending'},
    {key: 'delivered', title: 'Delivered'},
    {key: 'cancel', title: 'Cancel'},
  ]);

  const renderTabBar = (
    props: SceneRendererProps & {navigationState: {routes: Route[]}},
  ) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#43484b',
        height: '100%',
        borderRadius: 30,
      }}
      activeColor="#fff"
      inactiveColor="#000"
      pressColor="rgba(0, 0, 0, 0)"
      labelStyle={{fontFamily: 'Poppins-Regular'}}
      style={{backgroundColor: 'rgba(0,0,0,0)', elevation: 0}}
      // @ts-ignore
      renderTab={({route, focused}) => (
        <View>
          <Text>{route.title}</Text>
        </View>
      )}
    />
  );

  return (
    <>
      <Header title="My Order" />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
        swipeEnabled={false}
        style={{marginHorizontal: 20, marginTop: 20}}
      />
    </>
  );
};

export default Order;
