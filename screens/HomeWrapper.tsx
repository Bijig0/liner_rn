import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type Props = {};

const Dummy = () => <View></View>;

const HomeWrapper = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
          <Stack.Screen name="RestaurantList" component={Dummy} />
          <Stack.Screen name="RestaurantDetails" component={Dummy}/>
    </Stack.Navigator>
  );
};

export default HomeWrapper;
