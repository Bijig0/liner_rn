import { View, Text } from "react-native";
import React from "react";
import Card from "../generic_components/Card";
import { useNavigation } from "@react-navigation/native";

type Props = {
  restaurantName: string;
};

const MyQueuesCard = (props: Props) => {
  const navigation = useNavigation();
  return (
    <Card
      onPress={() =>
        // Fix type hinting for this..rn I cant be fucked
        navigation.navigate("Home", {
          screen: "RestaurantDetails",
          params: {
            restaurantName: props.restaurantName,
            type: "queueDetails",
          },
        })
      }
      cardProportions="w-full h-card mb-search-bar"
      label={props.restaurantName}
      subLabel="Brighton,Vic"
      textBoxLayout="flex-1 justify-center items-center"
    />
  );
};

export default MyQueuesCard;
