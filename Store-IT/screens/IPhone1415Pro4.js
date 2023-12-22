import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415Pro4 = () => {
  return (
    <View style={styles.iphone1415Pro4}>
      <View style={[styles.iphone1415Pro4Child, styles.iphone1415Position]} />
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
      <View style={[styles.iphone1415Pro4Item, styles.iphone1415Position]} />
      <Text
        style={[styles.followingItemsAre, styles.followingTypo]}
      >{`Following items are expired: `}</Text>
      <Text style={[styles.tomatoes, styles.baygonTypo]}>Tomatoes</Text>
      <Text style={[styles.mangoes, styles.baygonTypo]}>Mangoes</Text>
      <Text style={[styles.baygon, styles.baygonTypo]}>Baygon</Text>
      <Text style={[styles.fruit, styles.fruitLayout]}>Fruit</Text>
      <Text style={[styles.fruit1, styles.fruitLayout]}>Fruit</Text>
      <Text style={[styles.pesticide, styles.fruitLayout]}>Pesticide</Text>
      <Text style={[styles.followingItemsNeeds, styles.followingTypo]}>
        Following items needs to be checked for expiration dates:
      </Text>
      <Text style={[styles.dec082023, styles.dec082023Typo]}>Dec. 08,2023</Text>
      <Text style={[styles.dairyCream, styles.dec082023Typo]}>Dairy Cream</Text>
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
  followingTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  baygonTypo: {
    height: 36,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  fruitLayout: {
    height: 23,
    color: Color.colorBlack,
  },
  dec082023Typo: {
    top: 316,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iphone1415Pro4Child: {
    backgroundColor: Color.colorGray_200,
    height: 202,
    top: 0,
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
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  topMenu: {
    left: 24,
    width: 345,
  },
  iphone1415Pro4Item: {
    top: 213,
    backgroundColor: Color.colorDarkorange,
    height: 639,
  },
  followingItemsAre: {
    top: 553,
    width: 341,
    height: 40,
    left: 18,
  },
  tomatoes: {
    left: 15,
    width: 154,
    height: 36,
    top: 610,
  },
  mangoes: {
    top: 647,
    width: 154,
    height: 36,
    left: 18,
  },
  baygon: {
    width: 88,
    top: 684,
    left: 18,
  },
  fruit: {
    left: 224,
    height: 23,
    width: 154,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
    top: 610,
  },
  fruit1: {
    top: 646,
    left: 224,
    height: 23,
    width: 154,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  pesticide: {
    left: 224,
    height: 23,
    width: 154,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
    top: 684,
  },
  followingItemsNeeds: {
    top: 235,
    left: 26,
    width: 285,
    height: 56,
  },
  dec082023: {
    left: 231,
    fontSize: FontSize.size_lg,
    width: 140,
    height: 23,
    color: Color.colorBlack,
  },
  dairyCream: {
    left: 28,
    color: "#f71414",
    width: 161,
    height: 27,
    fontSize: FontSize.size_xl,
    top: 316,
  },
  iphone1415Pro4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro4;
