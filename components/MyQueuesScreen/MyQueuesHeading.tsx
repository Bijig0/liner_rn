import { View, Text } from "react-native";
import React from "react";
import Heading from "../generic_components/Heading";

type Props = {};

const MyQueuesHeading = (props: Props) => {
  return (
    <Heading style="mb-9" text="My Queues" />
  );
};

export default MyQueuesHeading;
