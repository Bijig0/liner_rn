"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const symmetricDifference_1 = require("../symmetricDifference/symmetricDifference");
const anotherArray = ["Tonkotsu", "BurgerVille", "Fried Fries"];
const filterRestaurants = (restaurantsToFilter, restaurantsToFilterBy) => {
    let filteredRestaurants = [];
    for (const section of restaurantsToFilter) {
        const [restaurants] = section.data;
        filteredRestaurants = [
            ...filteredRestaurants,
            Object.assign(Object.assign({}, section), { data: [(0, symmetricDifference_1.default)(restaurants, restaurantsToFilterBy)] }),
        ];
    }
    return filteredRestaurants;
};
exports.default = filterRestaurants;
//# sourceMappingURL=filterRestaurantsByRemoval.js.map