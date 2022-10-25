import { View, Text } from "react-native";
import React from "react";
import tw from "../lib/tailwind";
import AppBox from "../components/generic_components/AppBox";
import Heading from "../components/generic_components/Heading";

type Props = {};

const Profile = (props: Props) => {
  return (
    <AppBox>
      <Heading text="Profile" />
      <View
        style={tw`h-8 w-full border-solid border-2 border-grey-regular justify-center`}
      >
        <Text style={tw`text-white`}>User Settings</Text>
      </View>
    </AppBox>
  );
};

export default Profile;
