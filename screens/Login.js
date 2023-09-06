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
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "../assets/Clean-Cart-Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async (req, res) => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message : ", err);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const user = { email: email, password: password };
    axios
      .post("http://localhost:8080/api/users/login", user)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Main");
      })
      .catch((err) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log(err);
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
            Login to your Account
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
                borderColor: "transparent",
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
                borderColor: "transparent",
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
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontFamily: "semibold" }}>
            Forgot Password
          </Text>
        </View>
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
          onPress={handleLogin}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontFamily: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Dont have an account? Register
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
