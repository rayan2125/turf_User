import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5"
import History from '../screens/History';
import Profile from '../screens/Profile';
import Turfbooking from '../screens/Booking/Turfbooking';
import BookTurf from '../screens/Booking/BookTurf';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Turfbooking' component={Turfbooking}/>
        <Stack.Screen name='BookTurf' component={BookTurf}/>
      </Stack.Navigator>
    );
  }
  const HistoryStack  = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    );
  }



const Router = () => {



  return (
    <Tab.Navigator screenOptions={{headerShown:false}}
    tabBarOptions={{
      activeTintColor: 'red', 
      inactiveTintColor: 'gray', 
    }}
    >
        <Tab.Screen name='Home' component={HomeStack} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="History" component={HistoryStack}
       options={{
        tabBarLabel: 'History',
        tabBarIcon: ({ color, size }) => (
          <Icon name="clock" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}



export default Router;
