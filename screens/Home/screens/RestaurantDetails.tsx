import React from "react";
import { Text, View } from "react-native";
import QueueDetailsImg from "../../../components/generic_components/DetailsImg";
import QueueDetailsInfoCardContainer from "../../../components/QueueDetailsScreen/QueueDetailsInfoCardContainer";
import ChatWithUsButton from "../../../components/QueueDetailsScreen/ChatWithUsButton";
import SubHeading from "../../../components/generic_components/SubHeading";
import UpdatesArea from "../../../components/QueueDetailsScreen/UpdatesArea";
import ScrollAppBox from "../../../components/generic_components/ScrollAppBox";
import BottomScreenPadding from "../../../components/generic_components/BottomScreenPadding";
import tw from "../../../lib/tailwind";
import QueueDetailsContainer from "../../../components/QueueDetailsContainer";
import ConditionalWrapper from "../../../utilities/ConditionalWrapper/ConditionalWrapper";

type Props = {
  route?: any;
};

const RestaurantDetails = (props: Props) => {
  const RestaurantDetails = (
    <>
      <SubHeading margin="y" text="Tonkotsu" />
      <Text style={tw`text-white mb-5`}>Brighton, Vic</Text>
    </>
  );

  return (
    <ScrollAppBox>
      <ConditionalWrapper
        wrapper={(children: React.ReactNode) => (
          <QueueDetailsContainer imgSrc={props.route.params.imgSrc}>{children}</QueueDetailsContainer>
        )}
        condition={props.route.params.type === "queueDetails"}
      >
        {RestaurantDetails}
      </ConditionalWrapper>
    </ScrollAppBox>
  );
};

export default RestaurantDetails;
