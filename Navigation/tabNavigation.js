import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShowDetailScreen from "../screens/DerailScreen/ShowDetailScreen";
import RoomChat from "../screens/RoomChat";
import Favorites from "../screens/Favorites";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Home({ navigation, route }) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ShowDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerBackTitle: "Detail",
        }}
      />
      <Stack.Screen
        name="RoomChat"
        component={RoomChat}
        options={({ route }) => ({
          title: route.params.UserName,
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
}
function Search({ navigation, route }) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitle: "Search",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ShowDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerBackTitle: "Detail",
        }}
      />
      <Stack.Screen
        name="RoomChat"
        component={RoomChat}
        options={({ route }) => ({
          title: route.params.UserName,
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
}
function Chat({ navigation, route }) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "",
          headerTitle: "Messages",
        }}
      />
      <Stack.Screen
        name="RoomChat"
        component={RoomChat}
        options={({ route }) => ({
          title: route.params.UserName,
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
}
function Profile({ navigation, route }) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favorites",
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ShowDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#026487",
            height: 100,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerBackTitle: "Detail",
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigation(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: "#fff",
          position: "absolute",
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          setOffset: {
            width: 10,
            hight: 10,
          },
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "30%",
              }}
            >
              <FontAwesome5
                name="home"
                size={25}
                color={focused ? "#026487" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "30%",
              }}
            >
              <FontAwesome5
                name="search"
                size={25}
                color={focused ? "#026487" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={Chat}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "30%",
              }}
            >
              <FontAwesome5
                name="comments"
                size={20}
                color={focused ? "#026487" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "30%",
              }}
            >
              <FontAwesome5
                name="user-alt"
                size={25}
                color={focused ? "#026487" : "gray"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
