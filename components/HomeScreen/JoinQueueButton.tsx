import { View, Text } from "react-native";
import React, { useState, useContext } from "react";
import Button from "../generic_components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../components/AppContext";

type Props = {
  buttonProps: any;
};

const JoinQueueButton = (props: Props) => {
  const context = useContext(AppContext);
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);
  const pressedButton = (
    <Button
      onPress={() => {
        // async to make animations smooth
        setTimeout(() => {
          context.setJoinedRestaurants((prevRestaurants) => {
            return prevRestaurants.filter(
              (restaurant) => restaurant !== props.buttonProps.restaurantName
            );
          });
        }, 100);

        setPressed(false);
      }}
      style="border-2 border-success bg-white"
      textColor="text-success"
      text="Queued"
      bgColor="bg-white"
    />
  );
  const nonPressedButton = (
    <Button
      textColor="text-white"
      // onPress={() => {
      //   navigation.navigate("QueueDetails", {
      //     restaurantName: props.buttonProps.restaurantName,
      //   });

      //   context.setJoinedRestaurants((joinedRestaurants) => {
      //     // console.log(props.buttonProps.restaurantName);
      //     return [...joinedRestaurants, props.buttonProps.restaurantName];
      //   });
      // }}
      onPress={() => {
        setTimeout(() => {
          context.setJoinedRestaurants((joinedRestaurants) => {
            // console.log(props.buttonProps.restaurantName);
            return [...joinedRestaurants, props.buttonProps.restaurantName];
          });
        }, 100);

        navigation.navigate("RestaurantDetails", {
          restaurantName: props.buttonProps.restaurantName,
          setPressed: setPressed,
          type: 'joinQueue'
        });

        setPressed(true);
      }}
      bgColor="bg-success"
      text="Queue"
    />
  );
  return pressed ? pressedButton : nonPressedButton;
};

export default JoinQueueButton;
