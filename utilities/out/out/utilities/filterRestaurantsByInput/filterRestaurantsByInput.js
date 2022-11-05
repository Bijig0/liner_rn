"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurantsFacade_1 = require("../filterRestaurantsByJoined/restaurantsFacade");
// Setup and teardown logic use a context manager when you give enough of a fuck
const filterRestaurantsByInput = (initialRestaurantsData, filterBy) => {
    const initialRestaurantsDataArr = (0, restaurantsFacade_1.toRestaurantsArray)(initialRestaurantsData);
    console.log(initialRestaurantsDataArr);
    const filteredArr = initialRestaurantsDataArr.map((arr) => arr.filter((toFilterArr) => toFilterArr.includes(filterBy)));
    console.log((0, restaurantsFacade_1.fromRestaurantsArray)(filteredArr, initialRestaurantsData));
    return (0, restaurantsFacade_1.fromRestaurantsArray)(filteredArr, initialRestaurantsData);
};
exports.default = filterRestaurantsByInput;
//# sourceMappingURL=filterRestaurantsByInput.js.map