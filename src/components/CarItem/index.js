import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./styles";

const CarItem = ({ model, brand, image, price, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.whiteBox}>
        <Image style={styles.image} source={image}></Image>
        <Text style={styles.model}>{model}</Text>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </Pressable>
  );
};

export default CarItem;
