import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../components/Dimention";
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#026487",
    flex: 1,
  },
  body: {
    flex: 4,
    flexDirection: "column",
    marginTop: 5,
    marginBottom: 60,
    marginLeft: 20,
    marginRight: 20,
  },

  textHeader_H: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 40,
  },
  textHeader_T: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 20,
    paddingTop: 10,
  },
  box: {
    backgroundColor: "#fff",
    height: windowHeight / 6.5,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#2AAE90",
    borderWidth: 0.5,
    borderRadius: 10,
    flex: 1,
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
    width: windowWidth / 3,
    height: windowHeight / 6.5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
