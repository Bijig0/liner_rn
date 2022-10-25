import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import AppBox from "../components/generic_components/AppBox";
import MyQueuesCard from "../components/MyQueuesScreen/MyQueuesCard";
import MyQueuesHeading from "../components/MyQueuesScreen/MyQueuesHeading";
import { AppContext } from "../components/AppContext";
import tw from "../lib/tailwind";
import { useNavigation, TabActions } from "@react-navigation/native";

type Props = {};

const MyQueuesScreen = (props: Props) => {
  const context = useContext(AppContext);

  return (
    <AppBox>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={context.joinedRestaurants}
        ListHeaderComponent={() => <MyQueuesHeading />}
        renderItem={({ item }) => {
          return <MyQueuesCard restaurantName={item} />;
        }}
      />
    </AppBox>
  );
};

export default MyQueuesScreen;
