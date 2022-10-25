import { View, Text } from "react-native";
import React from "react";
import HomeHeading from "./HomeHeading";
import SearchField from "../SearchField/SearchField";
import tw from "../../lib/tailwind";

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <View>
          <HomeHeading />
          <SearchField style={tw`flex-grow-0`} />
    </View>
  );
};

export default HomeHeader;
