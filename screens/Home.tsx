import { View, Text, SectionList, FlatList } from "react-native";
import React from "react";
import AppBox from "../components/AppBox";
import Header from "../components/Heading";
import SearchField from "../components/SearchField";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import tw from "../lib/tailwind";
import RestaurantCard from "../components/RestaurantCard";
import sectionData from "../mock_data/sections";

type Props = {
  navigation: any;
};

const Home = (props: Props) => {
  const renderSection = ({ item: { restaurants } }) => {
    const restaurantsCopy = restaurants;
    return (
      <FlatList
        style={tw`flex-grow-0 mb-search-bar overflow-x-visible`}
        horizontal={true}
        data={restaurantsCopy}
        renderItem={({ item }) => <RestaurantCard restaurantName={item} />}
      ></FlatList>
    );
  };
  return (
    <View style={tw`flex-1 bg-black`}>
      <AppBox style={tw`flex-1 px-14 pt-14`}>
        <Header style={tw`flex-grow-0`} />
        <SearchField style={tw`flex-grow-0`} />
        <SectionList
          style={tw`overflow-x-visible`}
          sections={sectionData}
          renderSectionHeader={({ section: { title } }) => {
            return <SubHeader style={tw`flex-grow-0`} name={title} />;
          }}
          renderItem={renderSection}
          stickySectionHeadersEnabled={false}
        />
      </AppBox>
    </View>
  );
};

export default Home;
