import React, { useState } from "react";
import { TextInput, Image, View } from "react-native";
import { styles } from "./styles";

const HomeHeader = ({ onSearchKeyword, keyword }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        {/* Search Icon */}
        <Image
          source={require("../../pictures/search.png")}
          style={styles.icon}
        />
        {/* Search Input */}
        <TextInput
          style={styles.input}
          onChangeText={onSearchKeyword}
          value={keyword}
          placeholder="Otsi romusid..."
        />
      </View>
    </View>
  );
};

export default HomeHeader;
