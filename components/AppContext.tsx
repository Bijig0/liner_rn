import React, { createContext, useState, useEffect, useMemo } from "react";
import filterRestauransByJoined from "../utilities/filterRestaurantsByJoined/filterRestaurantsByJoined";
import sectionData from "../mock_data/sections";
import filterRestaurantsByInput from "../utilities/filterRestaurantsByInput/filterRestaurantsByInput";
import {
  toRestaurantsArray,
  fromRestaurantsArray,
} from "../utilities/filterRestaurantsByJoined/restaurantsFacade";

type TAppContext = {
  // Make this use the same syntax
  restaurantsArray: RestaurantDetails[][];
  joinedRestaurants: string[];
  setJoinedRestaurants: React.Dispatch<React.SetStateAction<string[]>>;
  restaurantsToDisplay: readonly Restaurant[];
  setTextToFilterBy: React.Dispatch<React.SetStateAction<string>>;
  textToFilterBy: string;
};

// Fix your architecture for this. This means that for every filter you need to add a new thing
// To the conttext. Make it a one time thing only

export const AppContext = createContext<TAppContext>({} as TAppContext);

// Currently the workflow to add a new filtr is
// 1. Add a filtering thing in the component where you wanna filter
// 2. Add new state to the provider
// 3. In the provider call the function

// GOAL: Make the filterRestaurant functions all use the toArray thingo

const AppProvider = (props) => {
  const [unmodifiedRestaurants, setUnmodifiedRestaurants] =
    useState<readonly Restaurant[]>(sectionData);
  const [joinedRestaurants, setJoinedRestaurants] = useState<string[]>([]);
  const [textToFilterBy, setTextToFilterBy] = useState("");

  const restaurantsArray = useMemo(
    () => toRestaurantsArray(unmodifiedRestaurants),
    [unmodifiedRestaurants]
  );

  // Put a monad here for positioning the filter functions

  const filteredRestaurantsByJoined = filterRestauransByJoined(
    restaurantsArray,
    joinedRestaurants
  );

  const filteredRestaurantsByInput = filterRestaurantsByInput(
    filteredRestaurantsByJoined,
    textToFilterBy
  );
  // Use some sort of function composition here to put everything through every filter
  // Then display that final thing :)

  const restaurantsToDisplay = fromRestaurantsArray(
    filteredRestaurantsByInput,
    unmodifiedRestaurants
  );

  return (
    <AppContext.Provider
      value={{
        restaurantsArray,
        joinedRestaurants,
        setJoinedRestaurants,
        restaurantsToDisplay,
        setTextToFilterBy,
        textToFilterBy,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
