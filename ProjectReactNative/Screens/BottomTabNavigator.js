import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

// Các màn hình của bạn
import AudioListingScreen from '../Screens/AudioListingScreen';  
import PlayListDetail from '../Screens/PlayListDetail';
import MusicProfile from '../Screens/MusicProfile';
import SearchScreen from '../Screens/SearchScreen';
import SearchScreen2 from '../Screens/SearchScreen2';
import FeedScreen from '../Screens/Feed';
import Library from '../Screens/Library';
import PlayAudio from '../Screens/PlayAudio';
import PlaylistsScreen from '../Screens/PlaylistsScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tạo StackNavigator cho tab Home
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AudioListingScreen"
      screenOptions={{
        headerShown: false,
        detachInactiveScreens: false, // Không tách các màn hình
      }}
    >
      <Stack.Screen name="AudioListingScreen" component={AudioListingScreen} />
      <Stack.Screen name="PlayListDetail" component={PlayListDetail} /> 
      <Stack.Screen name="PlayAudio" component={PlayAudio} />
      <Stack.Screen name="MusicProfile" component={MusicProfile} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{
        headerShown: false,
        detachInactiveScreens: false, // Không tách
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SearchScreen2" component={SearchScreen2} />
    </Stack.Navigator>
  );
};

const LibraryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Library"
      screenOptions={{
        headerShown: false,
        detachInactiveScreens: false, // Không tách
      }}
    >
      <Stack.Screen name="Library" component={Library} />
      <Stack.Screen name="PlaylistsScreen" component={PlaylistsScreen} />
    </Stack.Navigator>
  );
};


// Tạo BottomTabNavigator
const BottomTabNavigator = ({ route }) => {
  const { username, avatar } = route.params; // Nhận dữ liệu từ Login
  console.log("Username:", username, "Avatar:", avatar);
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff', // Màu nền
          height: 60, // Chiều cao của Tab Bar
          paddingBottom: 10, // Thêm khoảng trống dưới
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center' }}>
              <Icon name="home" size={size} color={color} />
              <Text style={{ color, fontSize: 12 }}>Home</Text>
            </View>
          ),
        }}
        initialParams={{ username, avatar }} // Truyền tiếp dữ liệu xuống HomeStack
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center' }}>
              <Icon name="search" size={size} color={color} />
              <Text style={{ color, fontSize: 12 }}>Search</Text>
            </View>
          ),
        }}
        initialParams={{ username, avatar }} // Truyền tiếp dữ liệu xuống HomeStack
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center' }}>
              <Icon name="feed" size={size} color={color} />
              <Text style={{ color, fontSize: 12 }}>Feed</Text>
            </View>
          ),
        }}
        initialParams={{ username, avatar }} // Truyền tiếp dữ liệu xuống HomeStack
      />
      <Tab.Screen
        name="LibraryStack"
        component={LibraryStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center' }}>
              <Icon name="library-books" size={size} color={color} />
              <Text style={{ color, fontSize: 12 }}>Library</Text>
            </View>
          ),
        }}
        initialParams={{ username, avatar }} // Truyền tiếp dữ liệu xuống HomeStack
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
