import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Styles } from "../../styles/Styles_featured";
const CardProtectPlan = ({
  ins_prem,
  ins_prot_protec,
  ins_prot_Med_exp_y,
  ins_prot_room_day,
  ins_prot_room_icu,
  ins_prot_dis_protec,
  ins_prot_treatment,
}) => {
  return (
    <View style={Styles.featured_inner}>
      <Text style={Styles.title}>Protection plan</Text>
      <Text style={Styles.protec_text}>Insurance premium : {ins_prem}</Text>
      <Text style={Styles.protec_text}>Protection: {ins_prot_protec}</Text>
      <Text style={Styles.protec_text}>
        Medical expenses (per year): {ins_prot_Med_exp_y}
      </Text>
      <Text style={Styles.protec_text}>
        Room fee (Baht per day): {ins_prot_room_day}
      </Text>
      <Text style={Styles.protec_text}>ICU room fee: {ins_prot_room_icu}</Text>
      <Text style={Styles.protec_text}>
        Disease protection: {ins_prot_dis_protec}
      </Text>
      <Text style={Styles.protec_text}>Treatment: {ins_prot_treatment}</Text>
    </View>
  );
};
export default CardProtectPlan;
