import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Share,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CardFeatured from "../../components/Card_featured/Card-Featured";
import CardInsurance from "../../components/Card_Insurance/Card_Insurance";
import CardProtectPlan from "../../components/Card_protect_plan/Card_Protect_Plan";
import CardButttonCall from "../../components/Card_Contact/Card_Contact_Call";
import CardButttonChat from "../../components/Card_Contact/Card_Contact_chat";
import { Styles } from "../../styles/Styles_featured";
import { AuthContext } from "../../Navigation/authUser";
import * as Openanything from "react-native-openanything";
const ShowDetailScreen = ({ route, navigation }) => {
  const contactInfo = route.params.contact;
  const { user, setUser } = useContext(AuthContext);
  const [datauser, setDatauser] = useState(user);
  const [user_id, setUser_id] = useState(user.user_id);
  const [isLike, setisLike] = useState(false);
  const onPressShare = async () => {
    try {
      const result = await Share.share({
        message: contactInfo.ins_det,
        url: contactInfo.ins_scrImg,
        title: contactInfo.ins_title,
        subject: contactInfo.ins_title,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    CheackFavar(contactInfo.ins_id);
  }, []);
  const CreatChatURL = "http://10.0.2.2:3000/api/Chat/createListChat";
  const CreatMessageURL = "http://10.0.2.2:3000/api/Message/sentMessage";
  const CreatFavorInsURL = "http://10.0.2.2:3000/api/FavorIns/createFavorIns";

  const createChat = () => {
    fetch(CreatChatURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_User: user_id,
        id_Admin: contactInfo.ins_id_Admin,
        Name_Admin: contactInfo.ins_Name_Admin,
        img_Admin: contactInfo.ins_img_Admin,
        chat_Text: contactInfo.ins_chat_Text,
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === "Already") {
          navigation.navigate("RoomChat", {
            Img: contactInfo.ins_img_Admin,
            chatID: result.data.Listchat_id,
            user_id: user_id,
          });
          console.log("Already");
        } else {
          sentMessage(
            result.data.Listchat_Text,
            result.data.Listchat_id,
            result.data.Listchat_id_Admin
          );
          navigation.navigate("RoomChat", {
            Img: contactInfo.ins_img_Admin,
            chatID: result.data.Listchat_id,
            user_id: user_id,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };
  const dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };
  const sentMessage = (Chat_Text, id_RoomCha, id_User) => {
    fetch(CreatMessageURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomChat_id: id_RoomCha,
        user_id: id_User,
        chat_Text: Chat_Text,
        at_chat: new Date(),
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };
  const FavarIns = (id) => {
    fetch(CreatFavorInsURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Favor_id_INS: id,
        Favor_id_User: user_id,
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          setisLike(true);
        } else if (result.status === "Delete") {
          setisLike(false);
        }
      })
      .catch((error) => console.log("error", error));
  };
  const CheackFavar = (idIns) => {
    const CheackFavorInsURL =
      "http://10.0.2.2:3000/api/FavorIns/CheackFavorIns?Favor_id_INS=" +
      idIns +
      "&Favor_id_User=" +
      user_id;
    fetch(CheackFavorInsURL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.data) {
          setisLike(true);
        } else {
          setisLike(false);
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.body}>
          <Image source={{ uri: contactInfo.ins_scrImg }} style={Styles.img} />
          <Text style={Styles.textHeader_H}>{contactInfo.ins_title}</Text>
          <Text style={Styles.text_detail}>{contactInfo.ins_det}</Text>
          {/* Insurance information */}
          <CardInsurance
            Insurance_infor_profile={contactInfo.ins_inf_profile}
            Insurance_period={contactInfo.ins_payment_method}
            Insurance_payment_period={contactInfo.ins_payment_period}
            Insurance_payment_method={contactInfo.ins_payment_method}
            Insurance_health_check={contactInfo.ins_health_check}
          />
          {/* protect plan */}
          <CardProtectPlan
            ins_prem={contactInfo.ins_prot_prem}
            ins_prot_protec={contactInfo.ins_prot_protec}
            ins_prot_Med_exp_y={contactInfo.contactInfo}
            ins_prot_room_day={contactInfo.ins_prot_room_day}
            ins_prot_room_icu={contactInfo.ins_prot_room_icu}
            ins_prot_dis_protec={contactInfo.ins_prot_dis_protec}
            ins_prot_treatment={contactInfo.ins_prot_treatment}
          />

          {/* Contact */}
          <View style={Styles.featured_inner}>
            <Text style={Styles.text_title_blue_bt}>Contact</Text>
            <View style={Styles.contact}>
              <TouchableOpacity onPress={() => dialCall(contactInfo.ins_Call)}>
                <CardButttonCall />
              </TouchableOpacity>

              <TouchableOpacity onPress={createChat}>
                <CardButttonChat />
              </TouchableOpacity>
            </View>
          </View>

          {/* Other */}
          <View style={Styles.featured_inner}>
            <Text style={Styles.text_title_blue_bt}>Other</Text>
            <View style={Styles.Other}>
              <TouchableOpacity onPress={onPressShare}>
                <View style={Styles.OtherBox_r}>
                  <FontAwesome5
                    name="share-square"
                    size={30}
                    color="#fff"
                    style={Styles.icon}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => FavarIns(contactInfo.ins_id)}>
                <View style={Styles.OtherBox}>
                  {isLike ? (
                    <FontAwesome5
                      name="heart"
                      size={30}
                      color="red"
                      style={Styles.icon}
                    />
                  ) : (
                    <FontAwesome5
                      name="heart"
                      size={30}
                      color="#026487"
                      style={Styles.icon}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Openanything.Pdf(contactInfo.ins_Document)}
              >
                <View style={Styles.More_details_box}>
                  <FontAwesome5
                    name="file-pdf"
                    size={30}
                    color="red"
                    style={Styles.icon}
                  />
                  <Text style={Styles.More_details_text}>Details</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ShowDetailScreen;
