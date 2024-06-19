import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

//Screen names
const homeName = "Home";
const loginPage = "LoginPage";

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === loginPage) {
              iconName = focused ? 'list' : 'list-outline';

            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name={homeName} component={HomePage} />
        <Tab.Screen name={loginPage} component={LoginPage} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
