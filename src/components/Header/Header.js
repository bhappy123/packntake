import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={{}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: 84,
          flex: 1,
          paddingVertical: 12,
          marginTop: 1,
          backgroundColor: "#333",
        }}
      >
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Image
            source={require("../../img/left-arrow.png")}
            style={{
              width: 12,
              height: 12,
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
        </View>
        <View style={{ flex: 5, alignSelf: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
              fontSize: 18,
            }}
          >
            {props.title}
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "center" }}>
          {/* <Image
            source={require("../../img/right-arrow.png")}
            style={{ width: 12, height: 12 }}
          /> */}
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
