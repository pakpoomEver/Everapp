import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#026487",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    flex: 2,
    marginTop: 100,
    marginBottom: 50,
  },
  body: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    color: "#ffff",
    fontSize: 24,
    padding: 10,
  },
  boxView: {
    backgroundColor: "#ffff",
    flexDirection: "column",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 50,
    marginVertical: 10,
  },
  imgUser: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginVertical: 10,
  },
  iconUser: {
    padding: 10,
  },
  signup: {
    flexDirection: "row",
    alignItems: "center",
  },
  textDHA: {
    color: "#ffff",
    fontSize: 16,
  },
  signupText: {
    fontWeight: "bold",
    color: "#ffff",
    fontSize: 16,
    padding: 10,
  },
  checkBox: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  boxCheackBox: {
    flexDirection: "row",
    alignItems: "center",
  }
});
