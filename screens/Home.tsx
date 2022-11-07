import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantList from "./RestaurantList";
import RestaurantDetails from "./RestaurantDetails";
import tw from "../lib/tailwind";
import Header from "../components/Header";

type Props = {};

const Home = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="RestaurantList">
      <Stack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{
          header: Header
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
