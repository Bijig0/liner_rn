import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import resolveConfig from "tailwindcss/resolveConfig";
const tailwindConfig = require("../../tailwind.config.js");

type Props = {
  style?: any;
  placeholder: string,
  placeholderColor: any;
};

const SearchField = (props: Props) => {
  const fullConfig = resolveConfig(tailwindConfig) as any;
  const grey = fullConfig.theme.colors.grey.regular;
  return (
      <TextInput
        placeholderTextColor={props.placeholderColor ?? grey}
        placeholder={props.placeholder}
        style={tw`flex-4 text-white font-primary text-sm py-search-bar my-search-bar border-solid border-grey-regular border-b-2`}
      />
  );
};

export default SearchField;
