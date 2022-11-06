"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterRestaurantsByInput = (restaurantsArray, filterBy) => {
    const filteredArray = restaurantsArray.filter((arr) => arr.some((restaurantDetail) => Object.values(restaurantDetail).includes(filterBy)));
    return filteredArray;
};
exports.default = filterRestaurantsByInput;
//# sourceMappingURL=filterRestaurantsByInput.js.map