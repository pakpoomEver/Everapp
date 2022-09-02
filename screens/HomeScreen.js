import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Styles } from "../styles/styles";
import CardInsurance from "../components/Card-insurance";

const HomeScreen = ({ navigation }) => {
  const [insurance, setInsurance] = useState([]);
  const InsuranceURL = "http://10.0.2.2:3000/api/Insurance/getInsurance";
  useEffect(() => {
    getInsurance();
  }, []);
  const getInsurance = () => {
    fetch(InsuranceURL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setInsurance(result.data);
      })
      .catch((error) => console.log("error", error));
  };
  
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.textHeader_H}>Health insurance</Text>
        <Text style={Styles.textHeader_T}>
          <FontAwesome5 name="check-circle" size={12} color="#fff" /> More than
          100 life insurance packages.
        </Text>
        <Text style={Styles.textHeader_T}>
          <FontAwesome5 name="check-circle" size={12} color="#fff" /> Free
          health insurance consultation.
        </Text>
      </View>
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

export default HomeScreen;
