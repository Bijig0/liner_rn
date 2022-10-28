import { LogBox, View, Text } from "react-native";
import React, { useState, useContext } from "react";
import Button from "../generic_components/Button";
import {
  TabActions,
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { AppContext } from "../AppContext";

type Props = {};

const LeaveQueueButton = (props: Props) => {
  type QueueDetailRouteProp = RouteProp<AppParamList, "RestaurantDetails">;

  const context = useContext(AppContext);
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state',",
  ]);
  const navigation = useNavigation();
  const jumpToHome = TabActions.jumpTo("Home");
  const route = useRoute<QueueDetailRouteProp>();
  // console.log(`${props.route.params.restaurantName}`)
  return (
    <Button
      textColor="text-white"
      onPress={() => {
        setTimeout(() => {
          context.setJoinedRestaurants((prevRestaurants) =>
            prevRestaurants.filter(
              (restaurant) => restaurant !== route.params?.restaurantName
            )
          );
        }, 0);

        navigation.goBack();
      }}
      text="Leave"
      bgColor="bg-warning"
      style="absolute right-app-box bottom-0 translate-x-1/4"
    />
  );
};

export default LeaveQueueButton;
