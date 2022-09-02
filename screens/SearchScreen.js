import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CardInsurance from "../components/Card-insurance";
import { Styles } from "../styles/styles_Search";
const SearchScreen = ({ navigation }) => {
  const [insurance, setInsurance] = useState([]);
  const [insuranceSearch, setInsuranceSearch] = useState([]);
  const InsuranceURL = "http://10.0.2.2:3000/api/Insurance/GetInsuranceSearch";
  useEffect(() => {
    fetch(InsuranceURL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setInsurance(result.data);
        setInsuranceSearch(result.data);
        console.log("result", result.data);
      })
      .catch((error) => console.log("error", error));
    insurance.map((data) => {
      console.log(data);
    });
  }, []);
  const search = (text) => {
    setInsuranceSearch(() => {
      return insurance.filter(
        (data) =>
          data.ins_title.toLowerCase().includes(text.toLowerCase()) ||
          data.ins_det.toLowerCase().includes(text.toLowerCase())
      );
    });
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.boxSearch}>
        <FontAwesome5
          name="search"
          size={30}
          color="#026487"
          style={Styles.icon}
        />
        <TextInput placeholder="Search Insurance" onChangeText={search} />
      </View>
      <View style={Styles.body}>
        <FlatList
          data={insuranceSearch}
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
export default SearchScreen;
