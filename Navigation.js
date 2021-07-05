import React from 'react';
import { View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import HomeScreen from './Navigation/HomeScreen';
import SearchScreen from './Navigation/SearchScreen';
import ChatScreen from './Navigation/ChatScreen';
import ProfileScreen from './Navigation/ProfileScreen';
import ShowDetailScreen from './Navigation/ShowDetailScreen';

const Stack = createStackNavigator();
function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="ShowDetailScreen" component={ShowDetailScreen} />
        </Stack.Navigator>
    );
}
function Search() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={SearchScreen} />
        </Stack.Navigator>
    );
}
function Chat() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={ChatScreen} />
        </Stack.Navigator>
    );
}

function Profile() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={ProfileScreen} />
        </Stack.Navigator>
    );
}
const Tab = createBottomTabNavigator();
export default function Navigation(props) {
    return (
        <NavigationContainer >
            <Tab.Navigator tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: 5,
                    marginHorizontal: 20,
                    height: 60,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    setOffset: {
                        width: 10,
                        hight: 10,
                    },


                }
            }}>
                <Tab.Screen name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                position: 'absolute',
                                top: '30%'
                            }}>
                                <FontAwesome5 name='home' size={25} color={focused ? '#026487' : 'gray'} />
                            </View>
                        ),
                    }} />
                <Tab.Screen name="Search"
                    component={Search}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                position: 'absolute',
                                top: '30%'
                            }}>
                                <FontAwesome5 name='search' size={25} color={focused ? '#026487' : 'gray'} />
                            </View>
                        ),
                    }} />
                <Tab.Screen name="ChatScreen"
                    component={ChatScreen}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                position: 'absolute',
                                top: '30%'
                            }}>
                                <FontAwesome5 name='comments' size={25} color={focused ? '#026487' : 'gray'} />
                            </View>
                        ),
                    }} />
                <Tab.Screen name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                position: 'absolute',
                                top: '30%'
                            }}>
                                <FontAwesome5 name='user-alt' size={25} color={focused ? '#026487' : 'gray'} />
                            </View>
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}