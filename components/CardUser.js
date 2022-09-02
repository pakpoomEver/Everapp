import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Styles } from "../styles/Styles_Profile";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const CardUser = ({ userName, userSex, userPhone, userEmail , userImg}) => {
  return (
    <View style={Styles.userInfo}>
      <Image
        source={{ uri: userImg}}
        style={Styles.imgUser}
      />
      <View style={Styles.userInfoText}>
        <Text style={Styles.titleUser}> {userName}</Text>
        <View style={Styles.infoDetail}>
          {userSex === "Male" ? (
            <Text style={Styles.detailUser}>
              <FontAwesome5 name="male" size={20} color="#026487" />
              {"   Male"}
            </Text>
          ) : (
            <Text style={Styles.detailUser}>
              <FontAwesome5 name="female" size={20} color="#026487" />
              {"   Female"}
            </Text>
          )}
          <Text style={Styles.detailUser}>
            <FontAwesome5 name="phone-alt" size={20} color="#026487" />
            {"   " + userPhone}
          </Text>
        </View>
        <Text style={Styles.detailUser}>
          <FontAwesome5 name="envelope" size={20} color="#026487" />
          {"   " + userEmail}
        </Text>
      </View>
    </View>
  );
};

export default CardUser;
