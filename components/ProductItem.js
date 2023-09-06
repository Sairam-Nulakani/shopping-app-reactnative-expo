import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProductItem = ({ item }) => {
  return (
    <Pressable style={{ marginHorizontal: 20, marginVertical: 25 }}>
      <Image
        source={{ uri: item?.image }}
        style={{ width: 140, height: 140, resizeMode: "contain" }}
      />
      <Text style={{ width: 140, marginTop: 10 }} numberOfLines={1}>
        {item?.title}
      </Text>
      <View
        style={{
          mt: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item?.price}</Text>
        <Text style={{ color: "#FFC72C", flexWeight: "bold" }}>
          {item?.rating?.rate} ratings
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "#FFC72C",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text>Add to Cart</Text>
      </Pressable>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
