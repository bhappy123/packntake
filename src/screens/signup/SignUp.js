import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PTButton from "../../components/Button/PTButton";
import PTTextInput from "../../components/TextInput/PTTextInput";
import { PTCOLORS } from "../../components/GlobalColors/PTCOLORS";

const SignUp = () => {
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
        Sign Up
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.wrapper}>
          <PTTextInput label="Full Name" />
        </View>
        <View style={styles.wrapper}>
          <PTTextInput label="Country" />
        </View>
        <View style={styles.wrapper}>
          <PTTextInput label="Email" />
        </View>
        <View style={styles.wrapper}>
          <PTTextInput label="Password" />
        </View>
        <View style={styles.wrapper}>
          <PTButton
            style={styles.signupBtn}
            onPress={() => {
              console.log("Pressed Apple");
            }}
            title="Create An Account"
            buttonBackgroundColor="#333"
            buttonTextColor="#fff"
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={{ textAlign: "center" }}>
            By creating an account, you agree to our
            <Text
              style={{
                marginLeft: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#333",
              }}
            >
              Terms
            </Text>
          </Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={{ textAlign: "center" }}>
            Already Have An Account?
            <Text
              style={{
                marginLeft: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#333",
              }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
    marginVertical: 15,
  },
});
