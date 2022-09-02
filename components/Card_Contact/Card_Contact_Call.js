import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Styles } from "../../styles/Styles_featured";
const CardButttonCall = () => {
  return (
    <View style={Styles.contactBox_L}>
      <FontAwesome5
        name="phone-alt"
        size={30}
        color="#fff"
        style={{
          padding: 10,
        }}
      />
      <Text style={Styles.OtherText_r}>Call</Text>
    </View>
  );
};
export default CardButttonCall;
