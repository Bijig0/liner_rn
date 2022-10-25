import RawSearchIcon from "../../../assets/svgs/SearchIcon.svg";
import { View } from "react-native";
import React from "react";
import tw from "../../../lib/tailwind";

type Props = {};

const SearchIcon = (props: Props) => {
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        {/* Use position Absolute for this and pseudo elements */}
        {/* Also make sure to fix up these styles without using relative positioning */}
        <View
          style={tw`rounded-md aspect-square w-[35px] bg-orange items-center justify-center relative top-2`}
        >
          <RawSearchIcon fill={"black"} style={tw`h-svg-icon w-svg-icon`} />
        </View>
      </View>
    );
};

export default SearchIcon;

