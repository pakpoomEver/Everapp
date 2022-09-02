import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Styles } from "../../styles/Styles_featured";
const CardFeatured = ({ featured_title, featured_detail }) => {
  return (
    <View style={Styles.featured_inner}>
      <View style={Styles.featured_box_title}>
        <FontAwesome5
          name="shield-alt"
          size={30}
          color="#026487"
          style={Styles.icon}
        />
        <Text style={Styles.featured_title}>{featured_title}</Text>
      </View>
      <Text style={Styles.featured_detail}>{featured_detail}</Text>
    </View>
  );
};
export default CardFeatured;
