import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Styles } from "../styles/styles";

const CardInsurance = ({ scrImg, title, detail, premium, premium_per }) => {
  return (
    <View style={Styles.box}>
      <Image
        source={{
          uri: scrImg
        }}
        style={Styles.img}
      />
      <View style={Styles.boxText}>
        <Text style={Styles.text_box_title}>{title}</Text>
        <Text style={Styles.text_box_detail}>{detail}</Text>
        <Text style={Styles.text_box_premium}>
           {premium} THB/{premium_per}
        </Text>
      </View>
    </View>
  );
};

export default CardInsurance;
