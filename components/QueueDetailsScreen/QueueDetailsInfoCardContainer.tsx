import { View, Text } from "react-native";
import React from "react";
import QueueDetailsInfoCard from "./QueueDetailsInfoCard";
import tw from "../../lib/tailwind";

type Props = {};

const QueueDetailsInfoCardContainer = (props: Props) => {
  return (
    <View style={tw`flex-row justify-between mt-16 mb-12`}>
      <QueueDetailsInfoCard label="1" subLabel="Position"/>
      <QueueDetailsInfoCard label="20-30 Mins" subLabel="Estimated Waiting Time"/>
    </View>
  );
};

export default QueueDetailsInfoCardContainer;
