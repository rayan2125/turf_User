import * as React from 'react';
import { View, useWindowDimensions, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { color } from '../../assets/Constant/Constant';
import Completed from '../History/completed';
import InCompleted from '../History/inCompleted';
import { Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const FirstRoute = () => (
  <InCompleted />
);

const SecondRoute = () => (
  <Completed />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const BookingHistory = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Pending Matches' },
    { key: 'second', title: 'Match Completed' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={{ backgroundColor: color.Primary }}
    />
  );
  const navigation = useNavigation()
  const renderHeader = () => (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
      <TouchableOpacity style={{}} onPress={() => navigation.pop()}>

        <Icon source="arrow-left" size={30} />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, marginHorizontal: 30 }}> My Booking </Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>

      {renderHeader()}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default BookingHistory;
