
export const restaurantsPreFilter: Restaurant[] = [
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
export const expectedRestaurantsPostFilteringSingleRestaurant: Restaurant[] = [
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

export const expectedRestaurantsPostFilteringMultipleRestaurantOnTheSameSection: Restaurant[] =
  [
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

export const expectedRestaurantsPostFilteringMultipleRestaurantOnDifferentSections =
  [
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
