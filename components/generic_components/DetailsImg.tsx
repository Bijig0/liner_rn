import { View, Text, Image } from "react-native";
import React from "react";
import RawRestaurantImg from "../../assets/restaurant.jpg";
import tw from "../../lib/tailwind";
import LeaveQueueButton from "../QueueDetailsScreen/LeaveQueueButton";
import { useWindowDimensions } from "react-native";

type Props = {
  type: string;
  imgSrc: URL;
};

const DetailsImg = (props: Props) => {
  const { width } = useWindowDimensions();
  const fullScreenWidth = width;
  return (
    <View style={tw`relative right-app-box w-[${fullScreenWidth}px]`}>
      <Image
        source={{ uri: props.imgSrc.href }}
        style={tw`w-full h-card bg-green-100`}
      />
      {props.type === "joinQueue" ? <LeaveQueueButton /> : null}
    </View>
  );
};

export default DetailsImg;
