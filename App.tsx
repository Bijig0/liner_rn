import { Text, View, FlatList, SectionList, StyleSheet } from "react-native";
import tw from "./lib/tailwind";
import { useFonts } from "expo-font";
import React from "react";
import Footer from "./components/generic_components/Footer";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyQueuesScreen from "./screens/MyQueues";
import QueueDetails from "./components/QueueDetailsContainer";
import AppProvider from "./components/AppContext";
import RestaurantDetails from "./screens/RestaurantDetails";
import Home from "./screens/Home";

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

  const Tab = createBottomTabNavigator<AppParamList>();

  if (!fontsLoaded) {
    return (
      <Text style={tw`flex-1 justify-center items-center`}>Not loaded yet</Text>
    );
  }

  return (
    <React.StrictMode>
      <AppProvider>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={Footer}
            screenOptions={{
              headerShown: false,
              lazy: false,
            }}
            backBehavior="order"
          >
            <Tab.Screen
              name="Home"
              component={Home}
              navigationKey="Home-1"
            />
            <Tab.Screen
              name="MyQueues"
              component={MyQueuesScreen}
              navigationKey="MyQueues"
            />
            <Tab.Screen
              name="RestaurantDetails"
              component={RestaurantDetails}
              initialParams={{ type: "none" }}
            ></Tab.Screen>
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </AppProvider>
    </React.StrictMode>
  );
}
