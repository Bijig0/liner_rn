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
  setTextToFilterBy: React.Dispatch<
    React.SetStateAction<string>
  >;
};

// Fix your architecture for this. This means that for every filter you need to add a new thing
// To the conttext. Make it a one time thing only

export const AppContext = createContext<TAppContext>({} as TAppContext);

const AppProvider = (props) => {
  const [unmodifiedRestaurants, setUnmodifiedRestaurants] =
    useState<readonly Restaurant[]>(sectionData);
  const [joinedRestaurants, setJoinedRestaurants] = useState<string[]>([]);
  const [textToFilterBy, setTextToFilterBy] = useState("");
  

  // The empty array as second argument should be the joined restaurants we have in the provider



  const filteredRestaurantsByJoined = filterRestauransByJoined(
    unmodifiedRestaurants,
    joinedRestaurants
  );

  const filteredRestaurantsByInput = filterRestaurantsByInput(filteredRestaurantsByJoined, textToFilterBy)

  const restaurantsToDisplay = filteredRestaurantsByInput
  


  // Use some sort of function composition here to put everything through every filter
  // Then display that final thing :)

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
