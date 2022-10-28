import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantList from "./RestaurantList";
import RestaurantDetails from "./RestaurantDetails";
import tw from "../lib/tailwind";

type Props = {};

const Home = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="RestaurantList"
      screenOptions={{
        headerStyle: tw`absolute`,
      }}
    >
      <Stack.Screen name="RestaurantList" component={RestaurantList} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};

export default Home;
