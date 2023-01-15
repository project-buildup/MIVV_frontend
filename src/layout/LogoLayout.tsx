/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Alert, Image, ScrollView, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Styles from "./LogoLayoutStyle";

import Logo from '../../asset/layout/image/mivv.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';

type Prop = {
  enabled: boolean;
  bottomTab: boolean;
  back?: boolean;
  notification?: boolean;
  navigation?: StackNavigationProp<any, any>;
  children: React.ReactNode;
};

/**
 * 모든 화면의 레이아웃에 사용됩니다.
 * @prop {boolean} enabled 상단 로고 표시 여부를 결정합니다.
 * @prop {boolean} bottomTab 하단 탭 표시 여부를 결정합니다.
 * @prop {boolean} back 뒤로가기 버튼 표시 여부를 결정합니다.
 * @prop {boolean} notification 푸쉬알림 화면 버튼 여부를 결정합니다.
 * @prop {navigation} back이나 notification 사용시 navigation을 전달합니다.
 * @returns React.FC
 */
const LogoLayout: React.FC<Prop> = (props) => {
  const insets = useSafeAreaInsets();

  if (props.enabled === false) {
    return (
      <ScrollView
        style={{
          ...Styles.mainView,
          marginTop: insets.top,
          marginLeft: insets.left,
          marginRight: insets.right,
          marginBottom: props.bottomTab ? 0 : insets.bottom,
        }}
      >
        <View style={Styles.childrenView}>{props.children}</View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView
        style={{
          ...Styles.mainView,
          marginTop: insets.top,
          marginLeft: insets.left,
          marginRight: insets.right,
          marginBottom: props.bottomTab ? 0 : insets.bottom,
        }}
      >
        <View style={Styles.logoView}>
          <Icon
            size={25}
            name="chevron-left"
            style={{ ...Styles.back, opacity: props.back === true ? 1 : 0 }}
            onPress={() => {
              if (props.back === undefined || props.back === false) {
                return;
              }
              props.navigation?.pop();
            }}
          />
          <Image source={Logo} style={Styles.logo} />
          <Icon
            size={25}
            name="bell"
            style={{
              ...Styles.noti,
              opacity: props.notification === true ? 1 : 0,
            }}
            onPress={() => {
              if (
                props.notification === undefined ||
                props.notification === false
              ) {
                return;
              }
              // notification 화면으로 이동.
            }}
          />
        </View>
        <View style={Styles.childrenView}>{props.children}</View>
      </ScrollView>
    );
  }
};

export default LogoLayout;
