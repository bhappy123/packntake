import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { PTCOLORS } from "../GlobalColors/PTCOLORS";
const PTTextInput = ({ label }) => {
  return (
    <View style={styles.wrapper}>
      <>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <TextInput style={styles.textinput} />
      </>
    </View>
  );
};

export default PTTextInput;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  textinput: {
    borderWidth: 1,
    borderColor: PTCOLORS.secondaryDark,
    height: 50,
  },
  label: {
    color: PTCOLORS.primaryDark,
  },
  labelWrapper: {
    zIndex: 10,
    position: "absolute",
    left: 20,
    top: -10,
    backgroundColor: PTCOLORS.secondaryLight,
    paddingHorizontal: 8,
  },
});
