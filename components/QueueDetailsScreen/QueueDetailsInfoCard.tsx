import { View, Text } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

type Props = {
  label: string;
  subLabel: string;
};

const QueueDetailsInfoCard = (props: Props) => {
  return (
    <View
      style={tw`rounded-xl p-5 bg-grey-dark w-40 h-40 items-center justify-evenly border border-grey-regular`}
    >
      <Text style={tw`text-md font-primary-bold text-white`}>
        {props.label}
      </Text>
      <Text style={tw`text-2xs text-white font-primary-bold `}>{props.subLabel}</Text>
    </View>
  );
};

export default QueueDetailsInfoCard;
