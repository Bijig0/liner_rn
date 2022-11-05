import { NavigatorScreenParams } from '@react-navigation/native';

// change joinQueue to restaurantDetails
type CardViewType = "queueDetails" | "restaurantDetails" | "none";

declare global {
  type QueueDetailsParams = {
    // Set proper type here
    setPressed?: any;
    restaurantName: string;
    type: CardViewType;
  };
}

type TRootParamList = {
  Home: undefined;
  MyQueues: undefined;
  RestaurantDetails: QueueDetailsParams | undefined;
  Profile: undefined;
  RestaurantList: undefined,
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