import {
  View,
  Text,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext, useCallback, memo } from "react";
import AppBox from "../components/generic_components/AppBox";
import SubHeader from "../components/generic_components/SubHeading";
import tw from "../lib/tailwind";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import sectionData from "../mock_data/sections";
import HomeHeader from "../components/HomeScreen/HomeHeader";
import BottomScreenPadding from "../components/generic_components/BottomScreenPadding";
import { useRoute } from "@react-navigation/native";
import filterRestaurantsByJoinedByJoined from "../utilities/filterRestaurantsByJoined/filterRestaurantsByJoined";
import { AppContext } from "../components/AppContext";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import RawRestaurantImg from "../assets/restaurant.jpg";
import RestaurantImg from "../components/RestaurantCard/components/RestaurantImg";
import JoinQueueButton from "../components/HomeScreen/JoinQueueButton";

type Props = {
  navigation: any;
};

const Home = (props: Props) => {
  const navigation = useNavigation();
  console.log(useNavigationState(select => select))

  // const context = useContext(AppContext);
  // const restaurants = context.filteredRestaurantsByJoined;

  const renderItem = ({ item: { restaurantName, joined, key } }) => {
    return (
      <RestaurantCard
        key={key}
        joined={joined}
        restaurantName={restaurantName}
      />
    );
  };

  const renderSection = ({ item }) => {
    // This was from previous, this should be section.restaurants
    const restaurantsCopy = item;
    return (
      <FlatList
        getItemLayout={(data, index) => {
          // console.log(data);
          // console.log(index);
          return { length: 100, index, offset: 33 };
        }}
        showsHorizontalScrollIndicator={false}
        style={tw`flex-grow-0 overflow-visible`}
        horizontal={true}
        data={restaurantsCopy}
        renderItem={renderItem}
      ></FlatList>
    );
  };
  const renderSectionHeader = ({ section: { title, position } }) => {
    return (
      <SubHeader
        key={position}
        margin={position === 1 ? "b" : "y"}
        style={tw`flex-grow-0`}
        text={title}
      />
    );
  };

  return (
    <AppBox>
      <SectionList
        showsVerticalScrollIndicator={false}
        style={tw`overflow-visible`}
        sections={sectionData}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={() => <HomeHeader />}
        ListFooterComponent={() => <BottomScreenPadding />}
      />
    </AppBox>
  );
};

export default memo(Home);
