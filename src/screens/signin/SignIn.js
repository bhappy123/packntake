import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PTButton from "../../components/Button/PTButton";
import { PTCOLORS } from "../../components/GlobalColors/PTCOLORS";
import PTTextInput from "../../components/TextInput/PTTextInput";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.signUpHeadeing}>Pack & Take</Text>

      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 20,
          fontSize: 24,
        }}
      >
        Sign In
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <PTTextInput label="Email" />
        </View>
        <View style={styles.inputWrapper}>
          <PTTextInput label="Password" />
        </View>
        <View style={styles.wrapper}>
          <PTButton
            style={styles.signupBtn}
            onPress={() => {
              console.log("Pressed Apple");
            }}
            title="Sign In"
            buttonBackgroundColor="#333"
            buttonTextColor="#fff"
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={{ textAlign: "center", color: PTCOLORS.primaryGrey }}>
            Forgot Password ?
          </Text>
        </View>
        <View style={styles.wrapper}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 32,
              color: PTCOLORS.primaryGrey,
            }}
          >
            - OR -
          </Text>
        </View>
        <View style={styles.wrapper}>
          <PTButton
            style={styles.signupBtn}
            onPress={() => {
              console.log("Pressed Apple");
            }}
            title="Continue With Apple"
            buttonBackgroundColor="#000"
            buttonTextColor="#fff"
          />
        </View>
        <View style={styles.wrapper}>
          <PTButton
            style={styles.signupBtn}
            onPress={() => {
              console.log("Pressed Apple");
            }}
            title="Continue With Facebook"
            buttonBackgroundColor="#4267B2"
            buttonTextColor="#fff"
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={{ textAlign: "center" }}>
            Don't Have An Account?
            <Text
              style={{
                marginLeft: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#333",
              }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PTCOLORS.secondaryLight,
  },
  signUpHeadeing: {
    fontSize: 35,
    textAlign: "center",
    marginVertical: 30,
  },
  formContainer: {
    width: "90%",
    alignSelf: "center",
  },
  wrapper: {
    marginVertical: 2,
  },
  inputWrapper: {
    marginVertical: 15,
  },
});
