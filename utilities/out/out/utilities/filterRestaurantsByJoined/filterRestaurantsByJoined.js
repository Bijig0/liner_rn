"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterRestaurantsByJoined = (restaurantsArray, joinedRestaurants) => {
    const newRestaurantsArray = [];
    for (const restaurants of restaurantsArray) {
        const restaurantsDetails = [];
        for (const restaurant of restaurants) {
            const { restaurantName } = restaurant;
            const joined = joinedRestaurants.includes(restaurantName);
            restaurantsDetails.push(Object.assign(Object.assign({}, restaurant), { joined }));
        }
        newRestaurantsArray.push(restaurantsDetails);
    }
    return newRestaurantsArray;
};
exports.default = filterRestaurantsByJoined;
//# sourceMappingURL=filterRestaurantsByJoined.js.map