"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterRestaurantsByJoined = (restaurantsArray, joinedRestaurants) => {
    let newRestaurantsArray = [];
    for (const restaurants of restaurantsArray) {
        for (const restaurant of restaurants) {
            const { restaurantName } = restaurant;
            const joined = joinedRestaurants.includes(restaurantName);
            newRestaurantsArray = [...newRestaurantsArray, Object.assign(Object.assign({}, restaurant), { joined })];
        }
    }
    return [newRestaurantsArray];
};
exports.default = filterRestaurantsByJoined;
//# sourceMappingURL=filterRestaurantsByJoined.js.map