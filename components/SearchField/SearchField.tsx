import { View, Text, TextInput } from "react-native";
import React, {useState} from "react";
import tw from "../../lib/tailwind";
import resolveConfig from "tailwindcss/resolveConfig";
import InputField from "../generic_components/InputField";
import SearchIcon from "./components/SearchIcon";
import filterRestaurantsByInput from "../../utilities/filterRestaurantsByInput/filterRestaurantsByInput";
const tailwindConfig = require("../../tailwind.config.js");

type Props = {
  style?: any;
};

const SearchField = (props: Props) => {
  const fullConfig = resolveConfig(tailwindConfig) as any;
  const grey = fullConfig.theme.colors.grey.regular;
    
  return (
    <View {...props} style={tw`flex-row items-center`}>
      <InputField placeholder="Search" placeholderColor={grey} />
      <SearchIcon />
    </View>
  );
};

export default SearchField;
