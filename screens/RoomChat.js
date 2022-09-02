import React, { useState, useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import firebase from "../firebase";

const RoomChat = ({ route, navigation }) => {
  const [contactInfoimg, setcontactInfoimg] = useState(route.params.Img);
  const [user_id, setuser_id] = useState(route.params.user_id);
  const [chatID, setChatID] = useState(route.params.chatID);
  const [messages, setMessages] = useState([]);
  const messageURL =
    "http://10.0.2.2:3000/api/Message/getMessage?chat_id=" + chatID;
  const CreatMessageURL = "http://10.0.2.2:3000/api/Message/sentMessage";

  useEffect(() => {
    getMessage();
    console.log("messages", user_id);
    console.log("messages", messageURL);
  }, []);
  const getMessage = () => {
    fetch(messageURL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        let Data = result.data;
        let Chat = [];
        Data.forEach((data) => {
          if (data.DataChat_id_User !== user_id) {
            Chat.push({
              _id: data.DataChat_id_User,
              text: data.DataChat_Text,
              createdAt: new Date(),
              user: {
                _id: data.DataChat_id_User,
                name: "React Native",
                avatar: contactInfoimg,
              },
            });
          } else {
            Chat.push({
              _id: data.DataChat_id_User,
              text: data.DataChat_Text,
              createdAt: new Date(),
              user: {
                _id: user_id,
                name: "React Native",
              },
            });
          }
          console.log("data", data);
        });
        setMessages(Chat);
      })
      .catch((error) => console.log("error", error));
  };
  const onSend = useCallback((messagesChat = []) => {
    let id_RoomCha = chatID;
    let messageText = "";
    let messagesData = messagesChat;
    messagesData.map((message) => {
      messageText = message.text;
    });
    console.log("chat", messages);
    fetch(CreatMessageURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomChat_id: id_RoomCha,
        user_id: user_id,
        chat_Text: messageText,
        at_chat: new Date(),
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        getMessage();
      })
      .catch((error) => console.log("error", error));
  }, []);
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#026487",
          },
          left: {
            backgroundColor: "#fff",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
          left: {
            color: "#000",
          },
        }}
      />
    );
  };
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <Icon
            name="send-circle"
            size={32}
            color="#026487"
            style={{ marginBottom: 5 }}
          />
        </View>
      </Send>
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user_id,
        name: "React Native",
      }}
      renderBubble={renderBubble}
      renderSend={renderSend}
    />
  );
};
export default RoomChat;
