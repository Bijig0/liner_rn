import symmetricDifference from "../symmetricDifference/symmetricDifference";

const anotherArray = ["Tonkotsu", "BurgerVille", "Fried Fries"];

const filterRestaurants = (
  restaurantsToFilter: any,
  restaurantsToFilterBy: any
) => {
  let filteredRestaurants: any = [];
  for (const section of restaurantsToFilter) {
    const [restaurants] = section.data;
    filteredRestaurants = [
      ...filteredRestaurants,
      {
        ...section,
        data: [symmetricDifference(restaurants, restaurantsToFilterBy)],
      },
    ];
  }
  return filteredRestaurants;
};

export default filterRestaurants;
