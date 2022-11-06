
const filterRestaurantsByInput = (
  restaurantsArray: Array<Array<RestaurantDetails>>,
  filterBy: string
) => {
  const filteredArray = restaurantsArray.filter((arr: RestaurantDetails[]) =>
    arr.some((restaurantDetail) =>
      Object.values(restaurantDetail).includes(filterBy)
    )
  );
  return filteredArray;
};

export default filterRestaurantsByInput;
