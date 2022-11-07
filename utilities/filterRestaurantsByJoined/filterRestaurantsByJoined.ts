const filterRestaurantsByJoined = (
  restaurantsArray: Array<Array<RestaurantDetails>>,
  joinedRestaurants: string[]
): Array<Array<RestaurantDetails>> => {
  const newRestaurantsArray: RestaurantDetails[][] = [];
  for (const restaurants of restaurantsArray) {
    const restaurantsDetails: RestaurantDetails[] = [];
    for (const restaurant of restaurants) {
      const { restaurantName } = restaurant;
      const joined = joinedRestaurants.includes(restaurantName);
      restaurantsDetails.push({ ...restaurant, joined });
    }
    newRestaurantsArray.push(restaurantsDetails);
  }
  return newRestaurantsArray;
};

export default filterRestaurantsByJoined;
