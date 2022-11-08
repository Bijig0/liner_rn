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
  imgSrc: URL
};

const  RestaurantCard = (props: Props) => {
  const navigation = useNavigation();
  return (
    <Card
      imgSrc={props.imgSrc}
      onPress={() =>
        navigation.navigate("Home", {
          screen: "RestaurantDetails",
          params: {
            restaurantName: props.restaurantName,
            type: "viewDetails",
          },
        })
      }
      cardProportions={"w-card h-card"}
      label={props.restaurantName}
      subLabel="Brighton Vic"
      textBoxLayout={"flex-1 p-card flex-row justify-between"}
      Button={JoinQueueButton}
      buttonProps={{
        restaurantName: props.restaurantName,
        joined: props.joined,
        imgSrc: props.imgSrc
      }}
    />
  );
};

export default RestaurantCard;
