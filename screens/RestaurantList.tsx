import {
  View,
  Text,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  memo,
} from "react";
import AppBox from "../components/generic_components/AppBox";
import SubHeader from "../components/generic_components/SubHeading";
import tw from "../lib/tailwind";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import sectionData from "../mock_data/sections";
import HomeHeader from "../components/HomeScreen/HomeHeader";
import BottomScreenPadding from "../components/generic_components/BottomScreenPadding";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { AppContext } from "../components/AppContext";

type Props = {
  navigation: any;
};

const RestaurantList = (props: Props) => {
  const context = useContext(AppContext);
  const data = context.restaurantsToDisplay;
  const navigation = useNavigation();
  // console.log(useNavigationState((select) => select));
  console.log("render");

  // const context = useContext(AppContext);
  // const restaurants = context.filteredRestaurantsByJoined;

  const renderItem = ({ item: { restaurantName, joined, key } }) => {
    console.log(`${joined} for ${restaurantName}`);
    return (
      <RestaurantCard
        key={key}
        joined={joined}
        restaurantName={restaurantName}
      />
    );
  };

  const renderSection = ({ item }) => {
    const restaurantsCopy = item;
    return (
      <FlatList
        // getItemLayout={(data, index) => {
        //   // console.log(data);
        //   // console.log(index);
        //   return { length: 100, index, offset: 33 };
        // }}
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
        sections={data}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={HomeHeader}
        ListFooterComponent={BottomScreenPadding}
      />
    </AppBox>
  );
};

export default RestaurantList;
