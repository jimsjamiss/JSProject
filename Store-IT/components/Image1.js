import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image1Icon}
      resizeMode="cover"
      source={require("../assets/image1.png")}
    />
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    width: 20,
    height: 20,
  },
});

export default Image1;
