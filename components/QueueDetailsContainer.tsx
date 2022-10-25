import React from "react";
import QueueDetailsInfoCardContainer from "./QueueDetailsScreen/QueueDetailsInfoCardContainer";
import ChatWithUsButton from "./QueueDetailsScreen/ChatWithUsButton";
import SubHeading from "./generic_components/SubHeading";
import UpdatesArea from "./QueueDetailsScreen/UpdatesArea";
import ScrollAppBox from "./generic_components/ScrollAppBox";
import BottomScreenPadding from "./generic_components/BottomScreenPadding";
import { View } from "react-native";
import QueueDetailsImg from "./QueueDetailsScreen/QueueDetailsImg";

type Props = {
  route?: any;
  children: React.ReactNode;
};

const QueueDetailsContainer = (props: Props) => {
  return (
    <View>
      <QueueDetailsImg />
      {props.children}
      <QueueDetailsInfoCardContainer />
      <ChatWithUsButton />
      <SubHeading margin="y" text="Updates" />
      <UpdatesArea />
      <BottomScreenPadding />
    </View>
  );
};

export default QueueDetailsContainer;
