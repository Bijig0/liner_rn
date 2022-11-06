"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __importDefault(require("./helper"));
const filterRestaurantsByJoined = (restaurantsToFilter, restaurantsToFilterBy) => {
    let filteredRestaurantsByJoined = [];
    for (const section of restaurantsToFilter) {
        const [restaurants] = section.data;
        //   restaurants is the object
        filteredRestaurantsByJoined = [
            ...filteredRestaurantsByJoined,
            Object.assign(Object.assign({}, section), { data: [
                    (0, helper_1.default)(restaurants, restaurantsToFilterBy),
                ] }),
        ];
    }
    return filteredRestaurantsByJoined;
};
exports.default = filterRestaurantsByJoined;
//# sourceMappingURL=filterRestaurantsByJoined.js.map