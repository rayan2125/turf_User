import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5"
import History from '../screens/History';
import Profile from '../screens/Profile';
import Turfbooking from '../screens/Booking/Turfbooking';
import BookTurf from '../screens/Booking/BookTurf';
import OnBoarding from '../screens/OnBoardingScreen/onBoarding';
import Login from '../screens/Auth/login';
import Register from '../screens/Auth/register';
import TurfListing from '../screens/ListingTurf/turfListing';
import Dashboard from '../screens/dashboard';
import TurfDetails from '../screens/Turf/turfDetails';
import { color } from '../assets/Constant/Constant';
import EditProfile from '../screens/Myprofile/editProfile';
import BookingHistory from '../screens/Booking/bookingHistory';
import Completed from '../screens/History/completed';
import InCompleted from '../screens/History/inCompleted';
import MyTeam from '../screens/Team/myTeam';
import Matches from '../screens/Matches/Matches';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const data = null
const HomeStack = () => {
    return (
      
      
        <Tab.Navigator screenOptions={{headerShown:false}}
        tabBarOptions={{
          activeTintColor: color.Primary, 
          inactiveTintColor: 'black', 
        }}
        >
            <Tab.Screen name='Home' component={Home} options={{
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
  const HistoryStack  = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    );
  }



const Router = () => {


return(

  <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName= "Home">
  <Stack.Screen name="Home" component={HomeStack} />
  <Stack.Screen name='Turfbooking' component={Turfbooking}/>
  <Stack.Screen name='BookTurf' component={BookTurf}/>
  <Stack.Screen name='OnBoarding' component={OnBoarding}/>
  <Stack.Screen name='Login' component={Login}/>
  <Stack.Screen name='Register' component={Register}/>
  <Stack.Screen name='TurfListing' component={TurfListing}/>
  <Stack.Screen name='Dashboard' component={Dashboard}/>
  <Stack.Screen name='TurfDetails' component={TurfDetails}/>
  <Stack.Screen name='EditProfile' component={EditProfile}/>
  <Stack.Screen name='BookingHistory' component={BookingHistory}/>
  <Stack.Screen name='Completed' component={Completed}/>
  <Stack.Screen name='InCompleted' component={InCompleted}/>
  <Stack.Screen name='MyTeam' component={MyTeam}/>
  <Stack.Screen name='Matches' component={Matches}/>
</Stack.Navigator>
)
}



export default Router;
