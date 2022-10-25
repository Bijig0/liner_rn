import { View, Text } from "react-native";
import React from "react";
import Card from "../generic_components/Card";

type Props = {
  restaurantName: string;
};

const MyQueuesCard = (props: Props) => {
  return (
    <Card
      cardProportions="w-full h-card mb-search-bar"
      label={props.restaurantName}
      subLabel="Brighton,Vic"
      textBoxLayout="flex-1 justify-center items-center"
    />
  );
};

export default MyQueuesCard;
