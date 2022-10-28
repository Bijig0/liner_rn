
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

const filterIndividualSectionByJoined = (data: any, joinedRestaurants: any) => {
  let newData = [] as any;
  for (const restaurant of data) {
    const { restaurantName } = restaurant;
    let joined = false;
    if (joinedRestaurants.includes(restaurantName)) {
      joined = true;
    }
    newData = [...newData, { ...restaurant, joined }];
  }
  return newData;
};

// console.log(fn(data, ["Sushi Jiro"]));

export default filterIndividualSectionByJoined;
