import { View, Text } from "react-native";
import React from "react";

type Props = { children: React.ReactNode, style?: Object };

const AppBox = (props: Props) => {
    return <View style={props.style}>{props.children}</View>;
};

export default AppBox;
