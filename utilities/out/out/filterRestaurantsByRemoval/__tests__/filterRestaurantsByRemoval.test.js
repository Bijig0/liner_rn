"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterRestaurantsByRemoval_1 = require("../filterRestaurantsByRemoval");
const dummyData_1 = require("../dummyData");
it("filters single restaurants", () => {
    const restaurantsToFilterBy = ["Tonkotsu"];
    const actualRestaurantsPostFilter = (0, filterRestaurantsByRemoval_1.default)(dummyData_1.restaurantsPreFilter, restaurantsToFilterBy);
    expect(actualRestaurantsPostFilter).toEqual(dummyData_1.expectedRestaurantsPostFilteringSingleRestaurant);
});
it("filters multiple restaurants", () => {
    const restaurantsToFilterBy = ["Tonkotsu", "BurgerVille"];
    const actualRestaurantsPostFilter = (0, filterRestaurantsByRemoval_1.default)(dummyData_1.restaurantsPreFilter, restaurantsToFilterBy);
    expect(actualRestaurantsPostFilter).toEqual(dummyData_1.expectedRestaurantsPostFilteringMultipleRestaurantOnTheSameSection);
});
it("filters multiple restaurants over different sections", () => {
    const restaurantsToFilterBy = ["Tonkotsu", "BurgerVille", "Jinmu"];
    const actualRestaurantsPostFilter = (0, filterRestaurantsByRemoval_1.default)(dummyData_1.restaurantsPreFilter, restaurantsToFilterBy);
    expect(actualRestaurantsPostFilter).toEqual(dummyData_1.expectedRestaurantsPostFilteringMultipleRestaurantOnDifferentSections);
});
//# sourceMappingURL=filterRestaurantsByRemoval.test.js.map