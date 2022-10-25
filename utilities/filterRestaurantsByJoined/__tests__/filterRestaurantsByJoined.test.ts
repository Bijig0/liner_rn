import filterRestaurants from "../filterRestaurantsByJoined";
import restaurantsPreFilter from "../dummyData";

it("filters sets a single restaurant to joined", () => {
  const joinedRestaurants = ["Tonkotsu"];
  const actualRestaurantsPostFilter = filterRestaurants(
    restaurantsPreFilter,
    joinedRestaurants
  );

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
