const filterRestaurantsByJoined = (
  restaurantsArray: Array<Array<RestaurantDetails>>,
  joinedRestaurants: string[]
) => {
  let newRestaurantsArray: RestaurantDetails[] = [];
  for (const restaurants of restaurantsArray) {
    for (const restaurant of restaurants) {
      const { restaurantName } = restaurant;
      const joined = joinedRestaurants.includes(restaurantName)
      newRestaurantsArray = [...newRestaurantsArray, { ...restaurant, joined }];
    }
  }
  return [newRestaurantsArray];
};

export default filterRestaurantsByJoined;
