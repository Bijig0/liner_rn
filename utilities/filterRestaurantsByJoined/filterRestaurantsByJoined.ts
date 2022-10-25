import symmetricDifference from "../symmetricDifference/symmetricDifference";
import fn from './helper'

const filterRestaurantsByJoinedByJoined = (
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
        data: [fn(restaurants, restaurantsToFilterBy)],
      },
    ];
  }
  return filteredRestaurantsByJoined;
};

export default filterRestaurantsByJoinedByJoined;
