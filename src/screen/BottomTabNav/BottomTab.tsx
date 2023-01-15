import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Styles from "../../style/BottomTabNav/BottomTabStyle";

const selectIcons = (label: string, chosen: boolean): React.ReactNode => {
  if (chosen === true) {
    switch (label) {
      case "Saving":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabEnabled/Saving.png")}
          />
        );
      case "Triumph":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabEnabled/Triumph.png")}
          />
        );
      case "MyPage":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabEnabled/MyPage.png")}
          />
        );
      case "Expenditure":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabEnabled/Expenditure.png")}
          />
        );
      case "ChallengeList":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabEnabled/ChallengeList.png")}
          />
        );
      default:
        return <Text>에러</Text>;
    }
  } else {
    switch (label) {
      case "Saving":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabDisabled/Saving.png")}
          />
        );
      case "Triumph":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabDisabled/Triumph.png")}
          />
        );
      case "MyPage":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabDisabled/MyPage.png")}
          />
        );
      case "Expenditure":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabDisabled/Expenditure.png")}
          />
        );
      case "ChallengeList":
        return (
          <Image
            style={Styles.icon}
            source={require("../../../asset/layout/image/bottomTabDisabled/ChallengeList.png")}
          />
        );
      default:
        return <Text>에러</Text>;
    }
  }
};

const TabBar: React.FC<{
  state: any;
  descriptors: any;
  navigation: any;
}> = ({ state, descriptors, navigation }) => {
  return (
    <View style={Styles.main}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={Styles.item}
          >
            {selectIcons(label, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
