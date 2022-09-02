import React from "react";
import { Text, TouchableOpacity , View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Styles } from "../styles/Styles_Profile";
const ButtonProfile = ({ iconName ,buttonTitle, ...rest }) => {

  return (
    <TouchableOpacity {...rest}>
      <View style={Styles.boxMamu}>
        <FontAwesome5 name={iconName} size={25} color="#026487" />
        <Text style={Styles.textMamu}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonProfile;
