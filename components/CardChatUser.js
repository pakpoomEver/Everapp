import React from "react";
import { View, Text, Image } from "react-native";
import { Styles } from "../styles/styles_Chat";
const CardChatUser = ({ userImgs, userName, messageTime, masssageText }) => {
  return (
    <View style={Styles.UserInfo}>
      <View style={Styles.UserImgWrapper}>
        <Image source={{ uri: userImgs }} style={Styles.UserImg} />
      </View>
      <View style={Styles.TextSection}>
        <View style={Styles.UserInfoText}>
          <Text style={Styles.UserName}>{userName}</Text>
          <Text style={Styles.PostTime}>{messageTime}</Text>
        </View>
        <Text style={Styles.MessageText}>{masssageText}</Text>
      </View>
    </View>
  );
};

export default CardChatUser;
