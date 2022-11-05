"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filterRestaurantsByJoined_1 = __importDefault(require("../filterRestaurantsByJoined"));
const dummyData_1 = __importDefault(require("../dummyData"));
it("filters sets a single restaurant to joined", () => {
    const joinedRestaurants = ["Tonkotsu"];
    const actualRestaurantsPostFilter = (0, filterRestaurantsByJoined_1.default)(dummyData_1.default, joinedRestaurants);
    const expectedPostFilter = [
        {
            position: 1,
            title: "Queues Near You",
            data: [
                [
                    {
                        restaurantName: "Tonkotsu",
                        joined: true,
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
        {
            position: 3,
            title: "Additional Places Near You",
            data: [
                [
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
                ],
            ],
        },
    ];
    expect(actualRestaurantsPostFilter).toEqual(expectedPostFilter);
});
//# sourceMappingURL=filterRestaurantsByJoined.test.js.map