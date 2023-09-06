import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../assets/Clean-Cart-Logo.png";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8080/api/users/register", user)
      .then((res) => {
        console.log(res);
        Alert.alert(
          "Registered Successfully",
          "You have registered successfully"
        );
        setName("");
        setPassword("");
        setEmail("");
        navigation.navigate("Login");
      })
      .catch((err) => {
        Alert.alert("Regestration error", "Error occured while regestering");
        console.log("Regestration Failed", err);
      });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF8FD", alignItems: "center" }}
    >
      <View>
        <Image source={Logo} style={{ width: 150, height: 100 }} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: 17,
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Register to your Account
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              borderRadius: 5,
              marginTop: 30,
              backgroundColor: "#A505D0",
            }}
          >
            <Ionicons
              style={{ marginLeft: 8, color: "white" }}
              name="person"
              size={24}
              color="gray"
            />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 5,
                marginHorizontal: 3,
                width: 300,
                fontSize: 16,
                color: "white",
                paddingVertical: 10,
              }}
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              borderRadius: 5,
              marginTop: 30,
              backgroundColor: "#A505D0",
            }}
          >
            <MaterialCommunityIcons
              style={{ marginLeft: 8, color: "white" }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 5,
                marginHorizontal: 3,
                width: 300,
                fontSize: 16,
                color: "white",
                paddingVertical: 10,
              }}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              borderRadius: 5,
              marginTop: 30,
              backgroundColor: "#A505D0",
            }}
          >
            <Entypo
              style={{ marginLeft: 8, color: "white" }}
              name="lock"
              size={24}
              color="gray"
            />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 5,
                marginHorizontal: 3,
                width: 300,
                fontSize: 16,
                color: "white",
                paddingVertical: 10,
              }}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        ></View>
        <View style={{ marginTop: 50 }} />
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
          onPress={handleRegister}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontFamily: "bold",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already have an account ? login
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
