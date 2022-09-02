import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  body: {
    flex: 4,
    flexDirection: "column",
  },
  userInfo: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderColor: "#026487",
    borderRadius: 10,
    borderWidth: 0.5,
    marginVertical: 10,
  },
  userInfoText: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  imgUser: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  infoDetail: {
    flexDirection: "row",
  },
  titleUser: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  detailUser: {
    fontSize: 14,
    margin: 5,
  },
  boxMamu: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  textMamu: {
    fontSize: 16,
    justifyContent: "center",
    marginLeft: 20,
  },
});
