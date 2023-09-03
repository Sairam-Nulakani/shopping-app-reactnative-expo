import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    AsyncStorage.removeItem("authToken");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: "#00CED1",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 3,
              backgroundColor: "white",
              marginHorizontal: 7,
              gap: 10,
              height: 38,
              flex: 1,
            }}
          >
            <Ionicons
              style={{ paddingLeft: 10 }}
              name="search"
              size={21}
              color="black"
            />
            <TextInput placeholder="Search....." />
          </TouchableOpacity>
          <FontAwesome name="microphone" size={24} color="black" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
