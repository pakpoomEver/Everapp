import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 60,
  },
  boxSearch: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  body: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    backgroundColor: "#fff",
    height: 100,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#2AAE90",
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: "row",
  },
  boxText: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 5,
    marginRight: 5,
  },
  text_box_title: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Roboto",
  },
  text_box_detail: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Roboto",
    maxHeight: 60,
  },
  text_box_premium: {
    fontSize: 12,
    color: "#026487",
    fontFamily: "Roboto",
    maxWidth: 180,
  },
  img: {
    width: 145,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  icon: {
    paddingRight: 10,
  },
});
