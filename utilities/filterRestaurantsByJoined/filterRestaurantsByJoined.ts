const filterRestaurantsByJoined = (
  restaurantsArray: Array<Array<RestaurantDetails>>,
  joinedRestaurants: string[]
): Array<Array<RestaurantDetails>> => {
  let newRestaurantsArray: RestaurantDetails[] = [];
  for (const restaurants of restaurantsArray) {
    const temp = [];
    for (const restaurant of restaurants) {
      const { restaurantName } = restaurant;
      const joined = joinedRestaurants.includes(restaurantName);
      temp.push({ ...restaurant, joined });
    }
    newRestaurantsArray.push(temp);
  }
  return newRestaurantsArray;
};

export default filterRestaurantsByJoined;
