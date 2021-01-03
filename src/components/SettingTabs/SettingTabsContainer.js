import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SettingTabsContainer = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginHorizontal: 8,
        marginVertical: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingBottom: 10,
          borderBottomColor: "#ccc",
          borderBottomWidth: 2,
        }}
      >
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Image
            source={require("../../img/settings.png")}
            style={{
              width: 18,
              height: 18,
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
        </View>
        <View style={{ flex: 5, alignSelf: "center" }}>
          <Text>{props.title}</Text>
        </View>
      </View>
      {props.children}
    </View>
  );
};

export default SettingTabsContainer;

const styles = StyleSheet.create({});
