import React, { useState, useContext ,useEffect} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { AuthContext } from "../Navigation/authUser";
import { Styles } from "../styles/Styles_Profile";
import CardUser from "../components/CardUser";
import ButtonProfile from "../components/ButtonProfile";

const ProfileScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const [ userProfile , setUserProfile ] = useState(user);
 
  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <CardUser
          userName={userProfile.user_Name}
          userSex={userProfile.user_Sex}
          userPhone={userProfile.user_Phone}
          userEmail={userProfile.user_Email}
          userImg={userProfile.user_Img}
        />
        <ButtonProfile
          iconName="heart"
          buttonTitle="Your Favorites"
          onPress={() => navigation.navigate("Favorites")}
        />
        <ButtonProfile iconName="info-circle" buttonTitle="Support" />
        <ButtonProfile iconName="cog" buttonTitle="Settings" />
        <ButtonProfile
          iconName="sign-out-alt"
          buttonTitle="Sign out"
          onPress={() => {
            setUser(null), alert("Sing Out");
          }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
