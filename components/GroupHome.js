import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import IndividualGroup from "./IndividualGroup";

const GroupHome = ({ navigation, route }) => {
  return (
    <View style={styles.root}>
      <View style={styles.topView}>
        <Image
          style={styles.banner}
          source={{
            uri: "https://i.pinimg.com/564x/84/f5/53/84f5533218ae3fbc050349d5d1937d13.jpg",
          }}
        />
      </View>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.abs}
      >
        <View style={styles.topTopView} />
        <View style={styles.bottomView}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg",
            }}
          />
          <Text style={styles.titleText}>Mogi Home</Text>
          <Text style={styles.subText}>You owe Tarun $75</Text>
          <View style={styles.memberList}>
            <ScrollView
              bounces={false}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
            >
              <TouchableOpacity style={styles.member}>
                <Text style={styles.memberText}>Jeff</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.member}>
                <Text style={styles.memberText}>Smith</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.member}>
                <Text style={styles.memberText}>Jeff</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.member}>
                <Text style={styles.memberText}>Smith</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.member}>
                <Text style={styles.memberText}>Jeff</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.member}>
                <Text style={styles.memberText}>Smith</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  abs: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  topView: {
    width: "100%",
    height: Dimensions.get("window").height * 0.25,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  topTopView: {
    width: "100%",
    height: Dimensions.get("window").height * 0.2,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bottomView: {
    borderTopStartRadius: "30px",
    borderTopEndRadius: "30px",
    width: "100%",
    height: Dimensions.get("window").height * 0.95,
    backgroundColor: "white",
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  tinyLogo: {
    width: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").width * 0.2,
    borderRadius: 20,
    marginLeft: 30,
    marginTop: -20,
  },
  titleText: {
    fontSize: 0.1 * Dimensions.get("window").width,
    paddingLeft: 30,
  },
  subText: {
    fontSize: 0.05 * Dimensions.get("window").width,
    paddingLeft: 30,
  },
  memberList: {
    height: "7%",
    marginLeft: 30,
  },
  member: {
    height: "70%",
    width: 100,
    backgroundColor: "white",
    borderRadius: "8 px",
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  memberText: {
    fontSize: 0.05 * Dimensions.get("window").width,
    textAlign: "center",
    textAlignVertical: "center",
    padding: 10,
  },
});

export default GroupHome;
