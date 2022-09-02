import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import {windowWidth, windowHeight} from '../components/Dimention';
const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    width: windowWidth/ 1.3,
    height: windowHeight / 15,
    backgroundColor: "#ffff",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#026487",
  },
});

export default FormButton;
