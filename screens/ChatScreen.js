import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import CardChatUser from "../components/CardChatUser";
import { Styles } from "../styles/styles_Chat";
import { AuthContext } from "../Navigation/authUser";

const ChatScreen = ({ navigation }) => {
  const [listUser, setListChat] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  const [user_id, setUser_id] = useState(user.user_id);
  const getListChatURL =
    "http://10.0.2.2:3000/api/Chat/getListChat?user_id=" + user_id;
  useEffect(() => {
    fetch(getListChatURL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setListChat(result.data);
      })
      .catch((error) => console.log("error", error));
  }, );

  return (
    <View style={Styles.container}>
      <FlatList
        data={listUser}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={Styles.card}
            onPress={() =>
              navigation.navigate("RoomChat", {
                Img: item.Listchat_img_Admin,
                chatID: item.Listchat_id,
                user_id: user_id,
              })
            }
          >
            <CardChatUser
              userImgs={item.Listchat_img_Admin}
              userName={item.Listchat_Name_Admin}
              masssageText={item.Listchat_Text}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChatScreen;
