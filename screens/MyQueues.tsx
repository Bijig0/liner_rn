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

type Props = {};

const MyQueuesScreen = (props: Props) => {
  const context = useContext(AppContext);

  return (
    <AppBox>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={context.restaurantsArray[0]}
        ListHeaderComponent={() => <MyQueuesHeading />}
        renderItem={({ item: {restaurantName, imgSrc } }) => {
          return <MyQueuesCard imgSrc={new URL(imgSrc)} restaurantName={restaurantName} />;
        }}
      />
    </AppBox>
  );
};

export default MyQueuesScreen;
