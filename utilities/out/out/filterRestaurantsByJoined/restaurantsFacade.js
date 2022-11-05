"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromRestaurantsArray = exports.toRestaurantsArray = void 0;
const zip_1 = require("../zip");
const data = [
    {
        position: 1,
        title: "Queues Near You",
        data: [
            [
                {
                    restaurantName: "Tonkotsu",
                    joined: false,
                },
                {
                    restaurantName: "BurgerVille",
                    joined: false,
                },
                {
                    restaurantName: "Fried Fries",
                    joined: false,
                },
            ],
        ],
    },
    {
        position: 2,
        title: "Restaurants Near You",
        data: [
            [
                {
                    restaurantName: "Seoreni",
                    joined: false,
                },
                {
                    restaurantName: "Jinmu",
                    joined: false,
                },
                {
                    restaurantName: "Balai Lombok",
                    joined: false,
                },
            ],
        ],
    },
];
// Expected output is to return just the list inside data
const toRestaurantsArray = (initialRestaurantsData) => {
    const allRestaurantNames = [];
    for (const eachRestaurantData of initialRestaurantsData) {
        const [restaurants] = eachRestaurantData.data;
        const restaurantNames = restaurants.map(({ restaurantName }) => restaurantName);
        allRestaurantNames.push(restaurantNames);
    }
    return allRestaurantNames;
};
exports.toRestaurantsArray = toRestaurantsArray;
const fromRestaurantsArray = (restaurantsArray, initialRestaurantsData) => {
    const reconstructedRestaurantsData = [];
    for (const [restaurantNestedArray, eachRestaurantData] of (0, zip_1.default)(restaurantsArray, initialRestaurantsData)) {
        const dataProperty = [];
        for (const [restaurantName, eachRestaurantsInnerData] of (0, zip_1.default)(restaurantNestedArray, eachRestaurantData.data[0])) {
            dataProperty.push(Object.assign(Object.assign({}, eachRestaurantsInnerData), { restaurantName: restaurantName }));
        }
        const myTotal = Object.assign(Object.assign({}, eachRestaurantData), { data: [dataProperty] });
        reconstructedRestaurantsData.push(myTotal);
    }
    return reconstructedRestaurantsData;
};
exports.fromRestaurantsArray = fromRestaurantsArray;
const restoArray = (0, exports.toRestaurantsArray)(data);
const filteredArray = restoArray.filter((arr) => arr.includes("Tonkotsu"));
const reconstructedArray = (0, exports.fromRestaurantsArray)(filteredArray, data);
console.log(reconstructedArray);
//# sourceMappingURL=restaurantsFacade.js.map