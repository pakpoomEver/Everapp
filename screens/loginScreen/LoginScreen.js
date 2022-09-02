import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import { Styles } from "../../styles/styles_login";
import { AuthContext } from "../../Navigation/authUser";
const LoginScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const [emailUser, setEmail] = useState("");
  const [passwordUser, setPassword] = useState("");
  const SignInURL =
    "http://10.0.2.2:3000/api/user/login?email=" +
    emailUser +
    "&password=" +
    passwordUser;

  const signin = () => {
    if (!passwordUser) {
      alert("Please enter your password");
    }
    if (emailUser && passwordUser) {
      fetch(SignInURL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.data) {
            setUser(result.data);
            console.log(result.data);
            alert("Success");
          } else {
            alert("Email or Password is wrong");
          }
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.boxView}>
          <FontAwesome5
            name="user-alt"
            size={50}
            color="#026487"
            style={Styles.iconUser}
          />
        </View>
        <Text style={Styles.title}>Sign In</Text>
        <FormInput
          placeholderText="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={emailUser}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <FormInput
          placeholderText="Password"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={passwordUser}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <FormButton buttonTitle="LOGIN" onPress={signin} />
        <View style={Styles.signup}>
          <Text style={Styles.textDHA}>Don't have an Account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={Styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
