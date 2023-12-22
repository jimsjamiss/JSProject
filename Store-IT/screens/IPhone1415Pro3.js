import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415Pro3 = () => {
  return (
    <View style={styles.iphone1415Pro3}>
      <View style={[styles.iphone1415Pro3Child, styles.iphone1415Position]} />
      <Image
        style={styles.logo1Icon}
        resizeMode="cover"
        source={require("../assets/logo-11.png")}
      />
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
      <View style={[styles.iphone1415Pro3Item, styles.iphone1415Position]} />
      <View style={[styles.iphone1415Pro3Inner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.iphone1415Pro3Child1, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415Pro3Child2, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.addItem, styles.addItemTypo]}>ADD ITEM</Text>
      <Text style={[styles.inventory, styles.inventoryTypo]}>INVENTORY</Text>
      <Text style={[styles.checkStatus, styles.addItemTypo]}>CHECK STATUS</Text>
      <Text style={[styles.removeItem, styles.inventoryTypo]}>REMOVE ITEM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Position: {
    width: 393,
    left: 0,
    position: "absolute",
  },
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
  rectangleViewLayout: {
    height: 160,
    width: 156,
    borderRadius: Border.br_3xs,
    left: 29,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    left: 203,
    height: 160,
    width: 156,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  addItemTypo: {
    height: 30,
    width: 118,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  inventoryTypo: {
    width: 124,
    height: 30,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iphone1415Pro3Child: {
    height: 202,
    backgroundColor: Color.colorGray_200,
    top: 0,
    width: 393,
    left: 0,
  },
  logo1Icon: {
    top: 82,
    left: 132,
    width: 138,
    height: 103,
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
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  topMenu: {
    left: 24,
    width: 345,
  },
  iphone1415Pro3Item: {
    top: 213,
    backgroundColor: Color.colorDarkorange,
    height: 639,
    width: 393,
    left: 0,
  },
  iphone1415Pro3Inner: {
    top: 307,
  },
  rectangleView: {
    top: 555,
  },
  iphone1415Pro3Child1: {
    top: 555,
  },
  iphone1415Pro3Child2: {
    top: 307,
  },
  addItem: {
    left: 49,
    top: 378,
  },
  inventory: {
    left: 222,
    top: 378,
  },
  checkStatus: {
    top: 620,
    left: 56,
  },
  removeItem: {
    top: 624,
    left: 219,
  },
  iphone1415Pro3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro3;
