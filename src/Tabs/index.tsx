import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Create from "../Create";
import HomeScreen from "../HomeScreen";
import Profile from "../Profile";
import Bookmarks from "../Bookmarks";
import icons from "../../constants/icons";
const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, color, focused, name }: any) => [
  <View className="items-center justify-center gap-2">
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
    />
    <Text style={{color: color}} className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}>
      {name}
    </Text>
  </View>,
];

const TabsLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1, 
          borderTopColor: '#23232533',
          height: 84
        },
      }}
    >
      <Tab.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="create"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              focused={focused}
              name="Create"
            />
          ),
        }}
        component={Create}
      />
      <Tab.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              focused={focused}
              name="Profile"
            />
          ),
        }}
        component={Profile}
      />
      <Tab.Screen
        name="bookmarks"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              focused={focused}
              name="Bookmarks"
            />
          ),
        }}
        component={Bookmarks}
      />
    </Tab.Navigator>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
