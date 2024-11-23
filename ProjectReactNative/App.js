import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from './Screens/UserContext';
import BottomTabNavigator from './Screens/BottomTabNavigator';
import LaunchScreen from './Screens/LaunchScreen';
import AudioListingScreen from './Screens/AudioListingScreen';
import Register from './Screens/Register';
import Login from './Screens/Login';
import QuanLy from './Screens/QuanLy';
import CapNhatUser from './Screens/CapNhatUser';
import PlayListDetail from './Screens/PlayListDetail';
import PlayAudio from './Screens/PlayAudio';
import MusicProfile from './Screens/MusicProfile';
import SearchScreen from './Screens/SearchScreen';
import SearchScreen2 from './Screens/SearchScreen2';
import Feed from './Screens/Feed';
import Library from './Screens/Library';
import PlaylistsScreen from './Screens/PlaylistsScreen';
import PremiumScreen from './Screens/PremiumScreen';
import SubsPlan from './Screens/SubsPlan';
const Stack = createNativeStackNavigator();

export default function App() {
  // Trạng thái kiểm tra người dùng đã đăng nhập hay chưa
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isLoggedIn ? 'BottomTabNavigator' : 'LaunchScreen'}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
          <Stack.Screen name="AudioListingScreen" component={AudioListingScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="QuanLy" component={QuanLy} />
          <Stack.Screen name="CapNhatUser" component={CapNhatUser} />
          <Stack.Screen name="PlayListDetail" component={PlayListDetail} />
          <Stack.Screen name="PlayAudio" component={PlayAudio} />
          <Stack.Screen name="MusicProfile" component={MusicProfile} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="SearchScreen2" component={SearchScreen2} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Library" component={Library} />
          <Stack.Screen name="PlaylistsScreen" component={PlaylistsScreen} />
          <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
          <Stack.Screen name="SubsPlan" component={SubsPlan} /> 
          {/* Chuyển đến BottomTabNavigator sau khi đăng nhập */}
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
