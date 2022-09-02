import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  CheckBox,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import { Styles } from "../../styles/styles_login";
import { AuthContext } from "../../Navigation/authUser";
import * as ImagePicker from "expo-image-picker";
import firebase from "../../firebase";

const SignupScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const [emailUser, setEmail] = useState("");
  const [passwordUser, setPassword] = useState("");
  const [confPasswordUser, setConfPasswordUser] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [phoneUser, setPhoneUser] = useState("");
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [image, setImage] = useState(null);
  const CreatUserURL = "http://10.0.2.2:3000/api/user/create";
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const signUp = () => {
    if (
      emailUser &&
      passwordUser &&
      confPasswordUser &&
      nameUser &&
      phoneUser &&
      (male || female) &&
      image
    ) {
      if (passwordUser !== confPasswordUser) {
        alert("รหัสผ่าน ไม่ตรงกัน");
      } else if (passwordUser.length < 6) {
        alert("รหัสผ่าน ต้องมากกว่า 6 ตัวอักษร");
      } else {
        uploadImage(image, nameUser);
      }
    } else {
      alert("กรุณาใส่ข้อมูลให้ครบถ้วน");
    }
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async (image, nameUser) => {
    const response = await fetch(image);
    const blob = await response.blob();
    console.log(image, nameUser);
    var ref = firebase
      .storage()
      .ref()
      .child("images/" + nameUser);
    ref.put(blob).on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setLoading(true);
      },
      (error) => {
        setLoading(false);
        console.log("image uplode error: " + error);
        ref.close();
      },
      () => {
        ref.getDownloadURL().then((download) => {
          setLoading(false);
          creteUser(download);
        });
      }
    );

  };
  const creteUser = (imageURL) => {
    console.log("creteUser", imageURL);
    fetch(CreatUserURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_Name: nameUser,
        user_Phone: phoneUser,
        user_Sex: male ? "Male" : "Female",
        user_Email: emailUser,
        user_Password: passwordUser,
        user_Img: imageURL,
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setUser(result.data);
        console.log(user);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <View style={Styles.container}>
      <ScrollView>
        <View style={Styles.header}>
          <Text style={Styles.title}>Sign Up</Text>
          <TouchableOpacity onPress={pickImage}>
            {image ? (
              <Image style={Styles.imgUser} source={{ uri: image }} />
            ) : (
              <View style={Styles.boxView}>
                <FontAwesome5
                  name="user-alt"
                  size={50}
                  color="#026487"
                  style={Styles.iconUser}
                />
              </View>
            )}
          </TouchableOpacity>
          <Text style={Styles.textDHA}>Uplode profile</Text>
          <FormInput
            placeholderText="Enter your Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={false}
            value={emailUser}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <FormInput
            placeholderText="Enter your Password"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={passwordUser}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <FormInput
            placeholderText="Confirm Password"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={confPasswordUser}
            onChangeText={(text) => {
              setConfPasswordUser(text);
            }}
          />
          <FormInput
            placeholderText="Enter your Name"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={false}
            value={nameUser}
            onChangeText={(text) => {
              setNameUser(text);
            }}
          />
          <FormInput
            placeholderText="Enter your Phone Number"
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={false}
            value={phoneUser}
            onChangeText={(text) => {
              setPhoneUser(text);
            }}
          />
          <View style={Styles.boxCheackBox}>
            <View style={Styles.boxCheackBox}>
              <CheckBox
                style={Styles.checkBox}
                disabled={false}
                value={male}
                onValueChange={(Value) => {
                  setMale(Value), setFemale(false);
                }}
              />
              <Text style={Styles.textDHA}> Male</Text>
            </View>
            <View style={Styles.boxCheackBox}>
              <CheckBox
                style={Styles.checkBox}
                disabled={false}
                value={female}
                onValueChange={(Value) => {
                  setFemale(Value), setMale(false);
                }}
              />
              <Text style={Styles.textDHA}> Female</Text>
            </View>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <FormButton buttonTitle="REGISTER" onPress={signUp} />
          )}
          <View style={Styles.signup}>
            <Text style={Styles.textDHA}>Have an Account ?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={Styles.signupText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
