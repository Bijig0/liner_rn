import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "../lib/tailwind";
import resolveConfig from "tailwindcss/resolveConfig";
import SearchIcon from "../assets//svgs/SearchIcon.svg";
const tailwindConfig = require("../tailwind.config.js");

type Props = {
  style: any;
};

const SearchField = (props: Props) => {
  const fullConfig = resolveConfig(tailwindConfig) as any;
  const grey = fullConfig.theme.colors.grey.regular;
  return (
    <View {...props} style={tw`flex-row items-center`}>
      <TextInput
        placeholderTextColor={grey}
        placeholder="Search"
        style={tw`flex-4 text-white font-primary text-sm py-search-bar my-search-bar border-solid border-grey-regular border-b-2`}
      />
      {/* Use position Absolute for this and pseudo elements */}
      {/* Also make sure to fix up these styles without using relative positioning */}
      <View style={tw`flex-1 items-center justify-center`}>
        <View
          style={tw`rounded-md aspect-square w-[35px] bg-orange items-center justify-center relative top-2`}
        >
          <SearchIcon fill={"black"} style={tw`h-svg-icon w-svg-icon`} />
        </View>
      </View>
    </View>
  );
};

export default SearchField;
