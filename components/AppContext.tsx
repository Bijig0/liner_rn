import React, { createContext, useState, useEffect } from "react";
import filterRestauransByJoined from "../utilities/filterRestaurantsByJoined/filterRestaurantsByJoined";
import sectionData from "../mock_data/sections";
import filterRestaurantsByInput from "../utilities/filterRestaurantsByInput/filterRestaurantsByInput";

type TAppContext = {
  unmodifiedRestaurants: readonly Restaurant[];
  setUnmodifiedRestaurants: React.Dispatch<
    React.SetStateAction<readonly Restaurant[]>
  >;
  joinedRestaurants: readonly string[];
  setJoinedRestaurants: React.Dispatch<React.SetStateAction<string[]>>;
  restaurantsToDisplay: readonly Restaurant[];
  textToFilterBy: string;
  setTextToFilterBy: React.Dispatch<React.SetStateAction<string>>;
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
  
  // HERE CALL THE TORESTAURANTARRAY FUNCTION

  // ALL THE FILTERRESTAURANT FUNCTIONS SHOULD JUST FILTER AN ARRAY NORMALLY
  
  const [joinedRestaurants, setJoinedRestaurants] = useState<string[]>([]);
  const [textToFilterBy, setTextToFilterBy] = useState("");

  const filteredRestaurantsByJoined = filterRestauransByJoined(
    unmodifiedRestaurants,
    joinedRestaurants
  );

  const filteredRestaurantsByInput = filterRestaurantsByInput(
    filteredRestaurantsByJoined,
    textToFilterBy
  );
  // Use some sort of function composition here to put everything through every filter
  // Then display that final thing :)


  // THE FINALE HERE IS FROMRESTAURANTS
  const restaurantsToDisplay = filteredRestaurantsByInput;

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
        restaurantsToDisplay,
        textToFilterBy,
        setTextToFilterBy,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
