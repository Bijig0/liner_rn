export {};

import fonts, { mainFont } from "../constants/fonts";

declare global {
  type MainFont = typeof mainFont;
  type Font = typeof fonts[number];
}



declare global {
  type RestaurantDetails = {
    restaurantName: string;
    joined: boolean;
  };
  type Restaurant = {
    position: number;
    title: string;
    data: Array<Array<RestaurantDetails>>;
  };
}
