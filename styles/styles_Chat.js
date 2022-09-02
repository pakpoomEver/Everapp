import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../components/Dimention";
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    paddingBottom: 80,
  },
  card: {
    width: "100%",
  },
  UserInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  UserImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  UserImg: {
    width: windowWidth/ 10,
    height: windowHeight / 15,
    borderRadius: 50,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: windowWidth - 100,
    borderBottomWidth: 1,
    borderColor: "#026487",
  },
  UserInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  UserName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  PostTime: {
    fontSize: 12,
    color: "#666",
  },
  MessageText: {
    fontSize: 14,
    color: "#333333",
  },
});
