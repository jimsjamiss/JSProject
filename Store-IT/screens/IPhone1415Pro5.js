import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415Pro5 = () => {
  return (
    <View style={styles.iphone1415Pro5}>
      <View style={[styles.topMenu, styles.topMenuPosition]}>
        <Image
          style={[styles.signalIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/signal.png")}
        />
        <Image
          style={[styles.wiFiIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.batteryLevelIcon, styles.topMenuPosition]}
          resizeMode="cover"
          source={require("../assets/battery-level.png")}
        />
        <Text style={styles.text}>4:20</Text>
      </View>
      <View style={[styles.iphone1415Pro5Child, styles.iphone1415Position]} />
      <View style={[styles.iphone1415Pro5Item, styles.iphone1415Position]} />
      <Image
        style={styles.logo1Icon}
        resizeMode="cover"
        source={require("../assets/logo-1.png")}
      />
      <View style={[styles.iphone1415Pro5Inner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      <View style={styles.iphone1415Pro5Child1} />
      <Text style={styles.logIn}>Log-In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topMenuPosition: {
    height: 28,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 25,
    top: 0,
    position: "absolute",
  },
  iphone1415Position: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 42,
    width: 254,
    backgroundColor: Color.colorSaddlebrown,
    borderRadius: Border.br_smi,
    left: 69,
    position: "absolute",
  },
  usernameTypo: {
    height: 27,
    width: 173,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    left: 69,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  signalIcon: {
    left: 246,
    width: 25,
  },
  wiFiIcon: {
    left: 278,
    width: 27,
  },
  batteryLevelIcon: {
    left: 312,
    width: 33,
  },
  text: {
    top: 4,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  topMenu: {
    left: 24,
    width: 345,
  },
  iphone1415Pro5Child: {
    top: 455,
    borderTopLeftRadius: Border.br_96xl,
    borderTopRightRadius: Border.br_96xl,
    backgroundColor: Color.colorDarkorange,
    height: 397,
  },
  iphone1415Pro5Item: {
    height: 446,
    top: 0,
    width: 393,
    backgroundColor: Color.colorGray_200,
  },
  logo1Icon: {
    top: 129,
    left: 40,
    width: 313,
    height: 243,
    position: "absolute",
  },
  iphone1415Pro5Inner: {
    top: 569,
  },
  rectangleView: {
    top: 654,
  },
  username: {
    top: 542,
  },
  password: {
    top: 627,
  },
  iphone1415Pro5Child1: {
    top: 733,
    left: 89,
    borderRadius: Border.br_mini,
    width: 215,
    height: 30,
    position: "absolute",
    backgroundColor: Color.colorGray_200,
  },
  logIn: {
    top: 735,
    left: 182,
    fontSize: FontSize.size_mini,
    width: 67,
    height: 26,
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "700",
    position: "absolute",
  },
  iphone1415Pro5: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
});

export default IPhone1415Pro5;
