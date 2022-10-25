import filterRestaurants from "../filterRestaurantsByRemoval";
import {
  restaurantsPreFilter,
  expectedRestaurantsPostFilteringSingleRestaurant,
  expectedRestaurantsPostFilteringMultipleRestaurantOnTheSameSection,
  expectedRestaurantsPostFilteringMultipleRestaurantOnDifferentSections,
} from "../dummyData";

it("filters single restaurants", () => {
  const restaurantsToFilterBy = ["Tonkotsu"];
  const actualRestaurantsPostFilter = filterRestaurants(
    restaurantsPreFilter,
    restaurantsToFilterBy
  );

  expect(actualRestaurantsPostFilter).toEqual(
    expectedRestaurantsPostFilteringSingleRestaurant
  );
});

it("filters multiple restaurants", () => {
  const restaurantsToFilterBy = ["Tonkotsu", "BurgerVille"];
  const actualRestaurantsPostFilter = filterRestaurants(
    restaurantsPreFilter,
    restaurantsToFilterBy
  );

  expect(actualRestaurantsPostFilter).toEqual(
    expectedRestaurantsPostFilteringMultipleRestaurantOnTheSameSection
  );
});

it("filters multiple restaurants over different sections", () => {
  const restaurantsToFilterBy = ["Tonkotsu", "BurgerVille", "Jinmu"];
  const actualRestaurantsPostFilter = filterRestaurants(
    restaurantsPreFilter,
    restaurantsToFilterBy
  );

  expect(actualRestaurantsPostFilter).toEqual(
    expectedRestaurantsPostFilteringMultipleRestaurantOnDifferentSections
  );
});
