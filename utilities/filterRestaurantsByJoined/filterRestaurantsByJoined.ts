import filterIndividualSectionByJoined from "./helper";

const filterRestaurantsByJoined = (
  restaurantsToFilter: any,
  restaurantsToFilterBy: any
) => {
  let filteredRestaurantsByJoined: any = [];
  for (const section of restaurantsToFilter) {
    const [restaurants] = section.data;
    //   restaurants is the object
    filteredRestaurantsByJoined = [
      ...filteredRestaurantsByJoined,
      {
        ...section,
        data: [
          filterIndividualSectionByJoined(restaurants, restaurantsToFilterBy),
        ],
      },
    ];
  }
  return filteredRestaurantsByJoined;
};

export default filterRestaurantsByJoined;
