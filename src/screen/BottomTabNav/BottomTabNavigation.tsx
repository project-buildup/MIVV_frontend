import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScrChallengeListMain from "./ChallengeList/ScrChallengeListMain";
import ScrExpenditureMain from "./Expenditure/ScrExpenditureMain";
import ScrMyPageMain from "./MyPage/ScrMyPageMain";
import ScrSavingMain from "./Saving/ScrSavingMain";
import ScrTriumphMain from "./Triumph/ScrTriumphMain";

import BottomTab from "./BottomTab"

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => {
        return <BottomTab {...props} />;
      }}
    >
      <Tab.Screen name="Saving" component={ScrSavingMain} />
      <Tab.Screen name="Expenditure" component={ScrExpenditureMain} />
      <Tab.Screen name="ChallengeList" component={ScrChallengeListMain} />
      <Tab.Screen name="Triumph" component={ScrTriumphMain} />
      <Tab.Screen name="MyPage" component={ScrMyPageMain} />
    </Tab.Navigator>
  );
};
