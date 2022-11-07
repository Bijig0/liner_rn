"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterRestaurantsByJoined = (restaurantsArray, joinedRestaurants) => {
    let newRestaurantsArray = [];
    for (const restaurants of restaurantsArray) {
        const temp = [];
        for (const restaurant of restaurants) {
            const { restaurantName } = restaurant;
            const joined = joinedRestaurants.includes(restaurantName);
            temp.push(Object.assign(Object.assign({}, restaurant), { joined }));
        }
        newRestaurantsArray.push(temp);
    }
    return newRestaurantsArray;
};
exports.default = filterRestaurantsByJoined;
//# sourceMappingURL=filterRestaurantsByJoined.js.map