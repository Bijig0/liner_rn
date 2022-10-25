import React, { createContext, useState, useEffect } from "react";
import filterRestauransByJoined from "../utilities/filterRestaurantsByJoined/filterRestaurantsByJoined";
import sectionData from "../mock_data/sections";

type TAppContext = {
  unmodifiedRestaurants: readonly Restaurant[];
  setUnmodifiedRestaurants: React.Dispatch<
    React.SetStateAction<readonly Restaurant[]>
  >;
  joinedRestaurants: readonly string[];
  setJoinedRestaurants: React.Dispatch<React.SetStateAction<string[]>>;
  filteredRestaurantsByJoined: readonly Restaurant[];
};

export const AppContext = createContext<TAppContext>({} as TAppContext);

const AppProvider = (props) => {
  const [unmodifiedRestaurants, setUnmodifiedRestaurants] = useState<
    readonly Restaurant[]
  >([]);
  const [joinedRestaurants, setJoinedRestaurants] = useState<string[]>([]);


  // The empty array as second argument should be the joined restaurants we have in the provider
  // const filteredRestaurantsByJoined = filterRestauransByJoined(
  //   unmodifiedRestaurants,
  //   joinedRestaurants
  // );

  const filteredRestaurantsByJoined = sectionData

  // console.log(filteredRestaurantsByJoined[0].data)

  // useEffect(() => {
  //   const data = sectionData;

  //   setUnmodifiedRestaurants(data);
  // }, []);

  return (
    <AppContext.Provider
      value={{
        unmodifiedRestaurants,
        setUnmodifiedRestaurants,
        joinedRestaurants,
        setJoinedRestaurants,
        filteredRestaurantsByJoined,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
