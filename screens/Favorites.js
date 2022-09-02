import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AuthContext } from "../Navigation/authUser";
import CardInsurance from "../components/Card-insurance";
import { Styles } from "../styles/styles";
const Favoritessceen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const [user_id, setUser_id] = useState(user.user_id);
  const [insurance, setInsurance] = useState([]);
  const FavorURL =
    "http://10.0.2.2:3000/api/FavorIns/getFavorIns?userID=" + user_id;
  useEffect(() => {
    getFavor();
  }, []);

  const getFavor = () => {
    let ListFavor = [];
    fetch(FavorURL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        let Data = result.data;
        Data.forEach((item) => {
          let getInsuranceURL =
            "http://10.0.2.2:3000/api/Insurance/getInsuranceFavor?id=" +
            item.Favor_id_INS;
          fetch(getInsuranceURL, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
          })
            .then((response) => response.json())
            .then((result) => {
              let item = result.data;
              item.map((data) => {
                ListFavor.push(data);
              });
              if (result.data) {
                setInsurance(ListFavor);
              }
            })
            .catch((error) => console.log("error", error));
        });
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <FlatList
          data={insurance}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { contact: item })}
            >
              <CardInsurance
                scrImg={item.ins_scrImg}
                title={item.ins_title}
                premium={item.ins_prem}
                detail={item.ins_det}
                premium_per={item.ins_prem_per}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
export default Favoritessceen;
