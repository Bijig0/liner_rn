const filterRestaurantsByInput = (
  restaurantsArray: Array<Array<RestaurantDetails>>,
  filterBy: string
): RestaurantDetails[][] => {
  // const filteredArray = restaurantsArray.filter((arr: RestaurantDetails[]) =>
  //   arr.some(({ restaurantName }) =>
  //     restaurantName.toUpperCase().includes(filterBy.toUpperCase())
  //   )
  // );
  const filteredArray = restaurantsArray.map((arr: RestaurantDetails[]) => {
    return arr.filter(({ restaurantName }) =>
      restaurantName.toUpperCase().startsWith(filterBy.toUpperCase())
    );
  });
  return filteredArray;
};

export default filterRestaurantsByInput;
