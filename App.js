import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import BmiScreen from "./screens/BmiScreen";
import KonversiSuhuScreen from "./screens/KonversiSuhuScreen";
import AboutmeScreen from "./screens/AboutmeScreen";
import Icon from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HalamanHome" component={TabNavigator} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Icon name="user" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="calculator" size={25} color={"#1F41BB"} />
          ),
        }}
      />
      <Tab.Screen
        name="BmiCalculator"
        component={BmiScreen}
        options={{
          tabBarIcon: () => <Icon name="weight" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="KonfersiSuhu"
        component={KonversiSuhuScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="temperature-low" size={25} color={"#1F41BB"} />
          ),
        }}
      />
      <Tab.Screen
        name="Aboutme"
        component={AboutmeScreen}
        options={{
          tabBarIcon: () => <Icon name="male" size={25} color={"#1F41BB"} />,
        }}
      />
    </Tab.Navigator>
  );
}
