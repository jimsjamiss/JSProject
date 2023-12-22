import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415Pro2 = () => {
  return (
    <View style={styles.iphone1415Pro2}>
      <View style={[styles.iphone1415Pro2Child, styles.iphone1415Position]} />
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
        <Text style={[styles.text, styles.itemFlexBox]}>4:20</Text>
      </View>
      <View style={[styles.iphone1415Pro2Item, styles.iphone1415Position]} />
      <View style={[styles.addItemButton, styles.groupChildLayout]}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.addItem, styles.itemFlexBox]}>Add Item</Text>
        </View>
      </View>
      <View style={[styles.itemNameGroup, styles.itemLayout]}>
        <Text style={[styles.itemName, styles.itemFlexBox]}>Item Name</Text>
        <View style={styles.itemNameGroupChild} />
      </View>
      <View style={[styles.itemBarcode, styles.itemLayout]}>
        <Text style={[styles.itemName, styles.itemFlexBox]}>Item Barcode</Text>
        <View style={styles.itemNameGroupChild} />
      </View>
      <View style={[styles.itemQuantity, styles.itemLayout]}>
        <Text style={[styles.itemName, styles.itemFlexBox]}>Item Quantity</Text>
        <View style={styles.itemNameGroupChild} />
      </View>
      <View style={[styles.itemPrice, styles.itemLayout]}>
        <Text style={[styles.itemName, styles.itemFlexBox]}>Item Price</Text>
        <View style={styles.itemNameGroupChild} />
      </View>
      <View style={[styles.itemExpirationDate, styles.itemLayout]}>
        <Text style={[styles.itemName, styles.itemFlexBox]}>
          Expiration Date
        </Text>
        <View style={styles.itemNameGroupChild} />
      </View>
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
  itemFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 45,
    width: 319,
    position: "absolute",
  },
  itemLayout: {
    height: 55,
    left: 45,
    width: 319,
    position: "absolute",
  },
  iphone1415Pro2Child: {
    height: 202,
    backgroundColor: Color.colorGray_200,
    top: 0,
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
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    fontSize: FontSize.size_xl,
  },
  topMenu: {
    left: 24,
    width: 345,
  },
  iphone1415Pro2Item: {
    top: 213,
    backgroundColor: Color.colorDarkorange,
    height: 639,
  },
  groupChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_200,
    top: 0,
    left: 0,
    width: 319,
  },
  addItem: {
    top: 12,
    left: 108,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkorange,
    width: 111,
    height: 23,
    fontSize: FontSize.size_xl,
  },
  rectangleParent: {
    left: 0,
    width: 319,
    top: 0,
  },
  addItemButton: {
    top: 731,
    left: 37,
  },
  itemName: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  itemNameGroupChild: {
    top: 54,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    width: 321,
    height: 2,
    position: "absolute",
  },
  itemNameGroup: {
    top: 255,
  },
  itemBarcode: {
    top: 352,
  },
  itemQuantity: {
    top: 449,
  },
  itemPrice: {
    top: 546,
  },
  itemExpirationDate: {
    top: 643,
  },
  iphone1415Pro2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro2;
