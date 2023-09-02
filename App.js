import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("../personal_app/assets/fonts/Poppins-Regular.ttf"),
    light: require("../personal_app/assets/fonts/Poppins-Light.ttf"),
    bold: require("../personal_app/assets/fonts/Poppins-Bold.ttf"),
    medium: require("../personal_app/assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("../personal_app/assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("../personal_app/assets/fonts/Poppins-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
