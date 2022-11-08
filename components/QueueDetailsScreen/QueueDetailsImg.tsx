import { View, Text } from "react-native";
import React from "react";
import DetailsImg from "../generic_components/DetailsImg";

type Props = {
  imgSrc: URL
};

const QueueDetailsImg = (props: Props) => {
  return (
    <DetailsImg imgSrc={props.imgSrc} type="joinQueue"/>
  );
};

export default QueueDetailsImg;
