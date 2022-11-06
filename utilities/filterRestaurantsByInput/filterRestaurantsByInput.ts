import {
  toRestaurantsArray,
  fromRestaurantsArray,
} from "../filterRestaurantsByJoined/restaurantsFacade";

// Setup and teardown logic use a context manager when you give enough of a fuck

const filterRestaurantsByInput = (initialRestaurantsData: Restaurant[], filterBy: string) => {
  const initialRestaurantsDataArr = toRestaurantsArray(initialRestaurantsData);
  console.log(initialRestaurantsDataArr);
  const filteredArr = initialRestaurantsDataArr.map((arr: []) =>
    arr.filter((toFilterArr) => toFilterArr.includes(filterBy))
  );
  console.log(fromRestaurantsArray(filteredArr, initialRestaurantsData));
  return fromRestaurantsArray(filteredArr, initialRestaurantsData);
};

export default filterRestaurantsByInput;
