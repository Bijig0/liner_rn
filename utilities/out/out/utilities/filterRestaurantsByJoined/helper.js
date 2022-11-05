"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [
    {
        restaurantName: "Sushi Jiro",
        joined: false,
    },
    {
        restaurantName: "HeroFood",
        joined: false,
    },
    {
        restaurantName: "Uncle Roger's Chicken",
        joined: false,
    },
];
const filterIndividualSectionByJoined = (data, joinedRestaurants) => {
    let newData = [];
    for (const restaurant of data) {
        const { restaurantName } = restaurant;
        let joined = false;
        if (joinedRestaurants.includes(restaurantName)) {
            joined = true;
        }
        newData = [...newData, Object.assign(Object.assign({}, restaurant), { joined })];
    }
    return newData;
};
// console.log(fn(data, ["Sushi Jiro"]));
exports.default = filterIndividualSectionByJoined;
//# sourceMappingURL=helper.js.map