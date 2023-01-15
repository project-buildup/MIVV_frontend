import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flexDirection: "row",
    height: "10%",
    position: "relative",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  item: {
    flex: 1,
    height: "100%",
    justifyContent: "center"
  },
  icon: {
    alignSelf: "center",
  }
});
