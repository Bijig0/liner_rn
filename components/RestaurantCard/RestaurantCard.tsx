import { View, Text, Image } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import RestaurantImage from "./components/RestaurantImg";
import Card from "../generic_components/Card";
import JoinQueueButton from "../HomeScreen/JoinQueueButton";
import { TabActions, useNavigation } from "@react-navigation/native";

type Props = {
  restaurantName: string;
  joined: boolean;
};

const RestaurantCard = (props: Props) => {
  const navigation = useNavigation();
  const JumpToRestaurantDetails = TabActions.jumpTo("RestaurantDetails", {
    restaurantName: props.restaurantName,
    type: "viewDetails",
  });
  return (
    <Card
      onPress={() => navigation.dispatch(JumpToRestaurantDetails)}
      cardProportions={"w-card h-card"}
      label={props.restaurantName}
      subLabel="Brighton Vic"
      textBoxLayout={"flex-1 p-card flex-row justify-between"}
      Button={JoinQueueButton}
      buttonProps={{
        restaurantName: props.restaurantName,
        joined: props.joined,
      }}
    />
  );
};

export default RestaurantCard;
