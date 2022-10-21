import { Text, View, FlatList, SectionList, StyleSheet } from "react-native";
import tw from "./lib/tailwind";
import { useFonts } from "expo-font";
import Header from "./components/Heading";
import AppBox from "./components/AppBox";
import globalFonts from "./constants/fonts";
import RestaurantCard from "./components/RestaurantCard";
import MainButton from "./components/MainButton";
import React from "react";
import data from "./mock_data/data";
import SearchField from "./components/SearchField";
import SubHeader from "./components/SubHeader";
import sectionData from "./mock_data/sections";
import Footer from "./components/Footer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Test from "./screens/Test";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "./assets/svgs/HomeIcon.svg";
import SearchIcon from "./assets/svgs/SearchIcon.svg";
import TechIcon from "./assets/svgs/TechIcon.svg";

// import generateFontsByPathObj from "./utilities/generateFontsByPathObj";

const baseAssetsPath = "./assets/fonts";

// const generateFontsByPathObj = (
//   fonts: readonly Font[],
//   baseAssetsPath: string,
//   extension: string = "ttf"
// ) => {
//   const obj = {};
//   fonts.map((font: Font) => {
//     const assetsPath = `${baseAssetsPath}/DMSans-Regular.ttf`
//     console.log(assetsPath)
//     obj[font] = require(assetsPath);
//   });
//   return obj;
// };

// type BaseAssetsPath = "./assets/fonts";
// type AssetsPath = `${BaseAssetsPath}/${Font}.ttf`;

// Get type based on the values

export default function App() {
  // This function call should replace the bottom junk
  // const f_by_p = generateFontsByPathObj(globalFonts, baseAssetsPath);
  // console.log(f_by_p)
  // const [fontsLoaded] = useFonts({
  //   "DMSans-Regular": require('./assets/fonts/DMSans-Regular.ttf')
  // })

  const fonts_by_path: { [font in Font]: any } = {
    "DMSans-Regular": require(`${baseAssetsPath}/DMSans-Regular.ttf`),
    "DMSans-Bold": require(`${baseAssetsPath}/DMSans-Bold.ttf`),
    "DMSans-BoldItalic": require(`${baseAssetsPath}/DMSans-BoldItalic.ttf`),
    "DMSans-Medium": require(`${baseAssetsPath}/DMSans-Medium.ttf`),
    "DMSans-MediumItalic": require(`${baseAssetsPath}/DMSans-MediumItalic.ttf`),
    "DMSans-Italic": require(`${baseAssetsPath}/DMSans-Italic.ttf`),
  };
  const [fontsLoaded] = useFonts(fonts_by_path);

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

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  if (!fontsLoaded) {
    return (
      <Text style={tw`flex-1 justify-center items-center`}>Not loaded yet</Text>
    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator> */}
      <Tab.Navigator
        tabBar={Footer}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Test" component={Test} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}