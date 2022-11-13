import { NavigatorScreenParams } from '@react-navigation/native';

type CardViewType = "queueDetails" | "restaurantDetails" | "none";

declare global {
  type QueueDetailsParams = {
    // Set proper type here
    setPressed?: any;
    restaurantName: string;
    type: CardViewType;
    imgSrc: URL
  };
}

type HomeStackParamList = {
  RestaurantDetails: QueueDetailsParams | undefined;
  RestaurantList: undefined;
};

type TRootParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  MyQueues: undefined;
  Profile: undefined;
  // Find a way to delete these below types, right now it throws an error
  RestaurantDetails: QueueDetailsParams | undefined;
  RestaurantList: undefined;
};

declare global {
  type AppParamList = TRootParamList;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootParamList {}
  }
}

export {AppParamList}