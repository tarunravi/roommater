import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const IndividualGroup = ({ groupDetails }) => {
  return (
    <TouchableOpacity style={styles.root}>
      <View style={styles.leftView}>
        <Text style={styles.titleText}>{groupDetails.name}</Text>
        <Text style={styles.oweText}>You owe ${groupDetails.owe}</Text>
      </View>
      <View style={styles.rightView}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: groupDetails.pfp,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 130,
    backgroundColor: "white",
    borderRadius: "30px",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: "row",
    overflow: "hidden",
  },
  leftView: {
    flex: 0.6,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  rightView: {
    flex: 0.4,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: "100px",
    borderTopLeftRadius: "100px",
  },
  titleText: {
    flex: 1,
    fontSize: 0.08 * Dimensions.get("window").width,
    fontWeight: "bold",
  },
  oweText: {
    flex: 1,
    fontSize: 0.05 * Dimensions.get("window").width,
  },
});

export default IndividualGroup;
