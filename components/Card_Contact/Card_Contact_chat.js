import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Styles } from "../../styles/Styles_featured";
const CardButttonChat = () => {
  return (
    <View style={Styles.contactBox_R}>
    <FontAwesome5
      name="comments"
      size={30}
      color="#026487"
      style={{
        padding: 10,
      }}
    />
    <Text style={Styles.OtherText}>Chat</Text>
  </View>
  );
};
export default CardButttonChat;
