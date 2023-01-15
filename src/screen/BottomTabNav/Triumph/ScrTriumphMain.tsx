import React from "react";
import { View, Text } from "react-native";
import LogoLayout from "../../../layout/LogoLayout";

export default () => {
  return (
    <LogoLayout enabled={false} bottomTab={true}>
      <View>
        <Text>Triumph</Text>
      </View>
    </LogoLayout>
  );
};
