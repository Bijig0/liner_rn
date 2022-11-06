import zip from "../zip";

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
export const toRestaurantsArray = (
  initialRestaurantsData: readonly Restaurant[]
): Array<Array<RestaurantDetails>> => {
  const allRestaurantNames = [];
  for (const eachRestaurantData of initialRestaurantsData) {
    const [restaurants] = eachRestaurantData.data;
    allRestaurantNames.push(restaurants);
  }
  return allRestaurantNames;
};

export const fromRestaurantsArray = (
  restaurantsArray: any[],
  initialRestaurantsData: readonly Restaurant[]
):Restaurant[] => {
  const reconstructedRestaurantsData: any = [];
  for (const [restaurantNestedArray, eachRestaurantData] of zip(
    restaurantsArray,
    initialRestaurantsData
  )) {
    const dataProperty: any = [];
    for (const [restaurantName, eachRestaurantsInnerData] of zip(
      restaurantNestedArray,
      eachRestaurantData.data[0]
    )) {
      dataProperty.push({
        ...eachRestaurantsInnerData,
      });
    }
    const myTotal = { ...eachRestaurantData, data: [dataProperty] };
    reconstructedRestaurantsData.push(myTotal);
  }
  return reconstructedRestaurantsData;
};

if (require.main === module) {
  const restoArray = toRestaurantsArray(data);
  const filteredArray = restoArray.filter((arr: RestaurantDetails[]) =>
    arr.some((restaurantDetail) => Object.values(restaurantDetail).includes("Tonkotsu")))
  );
  const reconstructedArray = fromRestaurantsArray(filteredArray, data);
  console.log(reconstructedArray);
}
