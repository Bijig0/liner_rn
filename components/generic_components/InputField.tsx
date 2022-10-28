import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Button,
} from "react-native";
import React, { useContext, useState, memo, useRef, useEffect } from "react";
import tw from "../../lib/tailwind";
import resolveConfig from "tailwindcss/resolveConfig";
import { AppContext } from "../AppContext";
import filterRestaurantsByInput from "../../utilities/filterRestaurantsByInput/filterRestaurantsByInput";
const tailwindConfig = require("../../tailwind.config.js");

type Props = {
  style?: any;
  placeholder: string;
  placeholderColor: any;
};

const SearchField = (props: Props) => {
  const context = useContext(AppContext);
  const fullConfig = resolveConfig(tailwindConfig) as any;
  const grey = fullConfig.theme.colors.grey.regular;

  return (
    <>
      <TextInput
        onChangeText={(newText: string) => {
          context.setTextToFilterBy(newText);
          // context.filterBy("restaurantName", (rName) => rName.includes(newText))
          
        }}
        value={context.textToFilterBy}
        placeholderTextColor={props.placeholderColor ?? grey}
        placeholder={props.placeholder}
        style={tw`flex-4 text-white font-primary text-sm py-search-bar my-search-bar border-solid border-grey-regular border-b-2`}
      />
    </>
  );
};

export default SearchField;
