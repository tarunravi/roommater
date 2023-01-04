import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import IndividualGroup from "./IndividualGroup";

const Groups = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Groups</Text>
      </View>
      <View style={{ flex: 90 }}>
        <ScrollView
          style={{ flex: 1 }}
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <IndividualGroup
            groupDetails={{
              name: "Mogi",
              pfp: "https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg",
              owe: 0,
              id: 0,
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
  },
  titleText: {
    flex: 1,
    fontSize: 0.13 * Dimensions.get("window").width,
  },
});

export default Groups;
