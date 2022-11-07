"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterRestaurantsByInput = (restaurantsArray, filterBy) => {
    // const filteredArray = restaurantsArray.filter((arr: RestaurantDetails[]) =>
    //   arr.some(({ restaurantName }) =>
    //     restaurantName.toUpperCase().includes(filterBy.toUpperCase())
    //   )
    // );
    const filteredArray = restaurantsArray.map((arr) => {
        return arr.filter(({ restaurantName }) => restaurantName.toUpperCase().startsWith(filterBy.toUpperCase()));
    });
    return filteredArray;
};
exports.default = filterRestaurantsByInput;
//# sourceMappingURL=filterRestaurantsByInput.js.map