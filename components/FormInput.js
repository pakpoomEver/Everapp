import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../components/Dimention";
const FormTnput = ({
  labelValue,
  placeholderText,
  keyboardType,
  passwordType,
  secureTextEntry,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        placeholder={placeholderText}
        numberOfLines={1}
        placeholderTextColor="#8B8B8B"
        style={styles.input}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 20,
    width: windowWidth / 1.3,
    height: windowHeight / 15,
    backgroundColor: "#ffff",
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#3A6085",
  },
  input: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    width: "100%",
    paddingHorizontal: 10,
  },
});
export default FormTnput;
