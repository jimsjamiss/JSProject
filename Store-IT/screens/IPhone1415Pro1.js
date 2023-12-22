import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone1415Pro1 = () => {
  return (
    <View style={styles.iphone1415Pro1}>
      <View style={[styles.iphone1415Pro1Child, styles.iphone1415Position]} />
      <Image
        style={styles.logo1Icon}
        resizeMode="cover"
        source={require("../assets/logo-11.png")}
      />
      <View style={styles.topMenu}>
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
          style={styles.batteryLevelIcon}
          resizeMode="cover"
          source={require("../assets/battery-level.png")}
        />
        <Text style={styles.text}>4:20</Text>
      </View>
      <View style={[styles.iphone1415Pro1Item, styles.iphone1415Position]} />
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBar1, styles.menuLayout]} />
        <Text style={styles.inventory}>Inventory</Text>
        <Text style={[styles.user, styles.userTypo]}>User</Text>
        <Text style={[styles.notifications, styles.userTypo]}>
          Notifications
        </Text>
        <Text style={[styles.settings, styles.userTypo]}>Settings</Text>
        <Image
          style={[styles.userIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/user.png")}
        />
        <Image
          style={[styles.openParcelIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/open-parcel.png")}
        />
        <Image
          style={[styles.alarmIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/alarm.png")}
        />
        <Image
          style={[styles.gearIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/gear.png")}
        />
      </View>
      <View
        style={[styles.iphone1415Pro1Inner, styles.iphone1415ChildLayout1]}
      />
      <View style={[styles.rectangleView, styles.iphone1415ChildLayout1]} />
      <View
        style={[styles.iphone1415Pro1Child1, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415Pro1Child2, styles.iphone1415ChildLayout1]}
      />
      <View style={[styles.iphone1415Pro1Child3, styles.image3IconLayout]} />
      <Text style={styles.search}>Search</Text>
      <View
        style={[styles.iphone1415Pro1Child4, styles.iphone1415ChildLayout]}
      />
      <Text
        style={styles.electronicsTools}
      >{`Electronics, Tools & Equipments`}</Text>
      <View
        style={[styles.iphone1415Pro1Child5, styles.iphone1415ChildLayout]}
      />
      <Text style={styles.kitchenware}>Kitchenware</Text>
      <Image
        style={[styles.rectangleIcon, styles.iphone1415ChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={[styles.clothing, styles.clothingTypo]}>Clothing</Text>
      <View
        style={[styles.iphone1415Pro1Child6, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.officeSupplies, styles.clothingTypo]}>
        Office Supplies
      </Text>
      <Image
        style={[styles.image3Icon, styles.image3IconLayout]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Position: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 25,
    top: 0,
    position: "absolute",
  },
  menuLayout: {
    height: 49,
    width: 393,
    left: 0,
    position: "absolute",
  },
  userTypo: {
    height: 26,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 43,
    width: 20,
    position: "absolute",
  },
  iphone1415ChildLayout1: {
    height: 64,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    width: 393,
    left: 0,
    position: "absolute",
  },
  image3IconLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    height: 55,
    width: 384,
    left: 5,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  clothingTypo: {
    left: 17,
    height: 23,
    width: 266,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone1415Pro1Child: {
    backgroundColor: Color.colorGray_200,
    height: 231,
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
    height: 28,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  topMenu: {
    left: 24,
    width: 345,
    height: 28,
    top: 0,
    position: "absolute",
  },
  iphone1415Pro1Item: {
    top: 239,
    backgroundColor: Color.colorDarkorange,
    height: 613,
  },
  menuBar1: {
    backgroundColor: "#808080",
    top: 0,
  },
  inventory: {
    left: 33,
    width: 63,
    fontSize: FontSize.size_xs,
    top: 15,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 25,
    position: "absolute",
  },
  user: {
    top: 16,
    left: 138,
    width: 37,
  },
  notifications: {
    top: 17,
    left: 214,
    width: 76,
  },
  settings: {
    left: 326,
    width: 55,
    top: 15,
    height: 26,
  },
  userIcon: {
    top: 2,
    left: 108,
  },
  openParcelIcon: {
    left: 7,
    top: 0,
  },
  alarmIcon: {
    left: 188,
    top: 0,
  },
  gearIcon: {
    left: 300,
    top: 0,
  },
  menuBar: {
    top: 803,
  },
  iphone1415Pro1Inner: {
    top: 348,
  },
  rectangleView: {
    top: 426,
  },
  iphone1415Pro1Child1: {
    top: 500,
  },
  iphone1415Pro1Child2: {
    top: 575,
  },
  iphone1415Pro1Child3: {
    top: 221,
    left: 74,
    width: 250,
    backgroundColor: Color.colorGray_100,
    height: 28,
  },
  search: {
    top: 222,
    left: 172,
    fontSize: FontSize.size_mini,
    color: "rgba(255, 255, 255, 0.57)",
    width: 57,
    height: 27,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  iphone1415Pro1Child4: {
    top: 354,
    backgroundColor: Color.colorGray_100,
  },
  electronicsTools: {
    top: 364,
    left: 13,
    width: 289,
    height: 35,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone1415Pro1Child5: {
    top: 430,
    backgroundColor: Color.colorGray_100,
  },
  kitchenware: {
    top: 446,
    left: 18,
    height: 23,
    width: 266,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleIcon: {
    top: 504,
  },
  clothing: {
    top: 515,
  },
  iphone1415Pro1Child6: {
    top: 579,
    backgroundColor: Color.colorGray_100,
  },
  officeSupplies: {
    top: 590,
  },
  image3Icon: {
    top: 713,
    left: 320,
    width: 50,
    height: 50,
  },
  iphone1415Pro1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro1;
