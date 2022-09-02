import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Styles } from "../../styles/Styles_featured";
const CardInsurance = ({
  Insurance_infor_profile,
  Insurance_period,
  Insurance_payment_period,
  Insurance_payment_method,
  Insurance_health_check
}) => {
  return (
    <View style={Styles.featured_inner}>
      <Text style={Styles.title}>Insurance information</Text>
      <View style={Styles.featured_box_title}>
        <FontAwesome5
          name="address-card"
          size={30}
          color="#026487"
          style={Styles.icon}
        />
        <Text style={Styles.featured_title}>Insured</Text>
      </View>
      <Text style={Styles.featured_detail}>{Insurance_infor_profile}</Text>
      <View style={Styles.featured_box_title}>
        <FontAwesome5
          name="user-shield"
          size={30}
          color="#026487"
          style={Styles.icon}
        />
        <Text style={Styles.featured_title}>Insurance</Text>
      </View>
      <Text style={Styles.featured_detail}>{Insurance_period}</Text>
      <View style={Styles.featured_box_title}>
        <FontAwesome5
          name="clock"
          size={30}
          color="#026487"
          style={Styles.icon}
        />
        <Text style={Styles.featured_title}>Premium payment period</Text>
      </View>
      <Text style={Styles.featured_detail}>{Insurance_payment_period}</Text>
      <View style={Styles.featured_box_title}>
        <FontAwesome5
          name="calendar-plus"
          size={30}
          color="#026487"
          style={Styles.icon}
        />
        <Text style={Styles.featured_title}>Premium payment method</Text>
      </View>
      <Text style={Styles.featured_detail}>{Insurance_payment_method}</Text>
      <View style={Styles.featured_box_title}>
        <FontAwesome5
          name="notes-medical"
          size={30}
          color="#026487"
          style={Styles.icon}
        />
        <Text style={Styles.featured_title}>Health check</Text>
      </View>
      <Text style={Styles.featured_detail}>{Insurance_health_check}</Text>
    </View>
  );
};
export default CardInsurance;
