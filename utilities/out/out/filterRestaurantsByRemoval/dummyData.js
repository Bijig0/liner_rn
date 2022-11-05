"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectedRestaurantsPostFilteringMultipleRestaurantOnDifferentSections = exports.expectedRestaurantsPostFilteringMultipleRestaurantOnTheSameSection = exports.expectedRestaurantsPostFilteringSingleRestaurant = exports.restaurantsPreFilter = void 0;
exports.restaurantsPreFilter = [
    {
        position: 1,
        title: "Queues Near You",
        data: [["Tonkotsu", "BurgerVille", "Fried Fries"]],
    },
    {
        position: 2,
        title: "Restaurants Near You",
        data: [["Seoreni", "Jinmu", "Balai Lombok"]],
    },
    {
        position: 3,
        title: "Additional Places Near You",
        data: [["Sushi Jiro", "HeroFood", "Uncle Roger's Chicken"]],
    },
];
exports.expectedRestaurantsPostFilteringSingleRestaurant = [
    {
        position: 1,
        title: "Queues Near You",
        data: [["BurgerVille", "Fried Fries"]],
    },
    {
        position: 2,
        title: "Restaurants Near You",
        data: [["Seoreni", "Jinmu", "Balai Lombok"]],
    },
    {
        position: 3,
        title: "Additional Places Near You",
        data: [["Sushi Jiro", "HeroFood", "Uncle Roger's Chicken"]],
    },
];
exports.expectedRestaurantsPostFilteringMultipleRestaurantOnTheSameSection = [
    {
        position: 1,
        title: "Queues Near You",
        data: [["Fried Fries"]],
    },
    {
        position: 2,
        title: "Restaurants Near You",
        data: [["Seoreni", "Jinmu", "Balai Lombok"]],
    },
    {
        position: 3,
        title: "Additional Places Near You",
        data: [["Sushi Jiro", "HeroFood", "Uncle Roger's Chicken"]],
    },
];
exports.expectedRestaurantsPostFilteringMultipleRestaurantOnDifferentSections = [
    {
        position: 1,
        title: "Queues Near You",
        data: [["Fried Fries"]],
    },
    {
        position: 2,
        title: "Restaurants Near You",
        data: [["Seoreni", "Balai Lombok"]],
    },
    {
        position: 3,
        title: "Additional Places Near You",
        data: [["Sushi Jiro", "HeroFood", "Uncle Roger's Chicken"]],
    },
];
//# sourceMappingURL=dummyData.js.map