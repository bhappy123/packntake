import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PTButton from "./src/components/Button/PTButton";
import { PTCOLORS } from "./src/components/GlobalColors/PTCOLORS";
import Header from "./src/components/Header/Header";
import OrderCard from "./src/components/OrderCard/OrderCard";
import ProductCard from "./src/components/ProductCard/ProductCard";
import SettingTabs from "./src/components/SettingTabs/SettingTabs";
import SettingTabsContainer from "./src/components/SettingTabs/SettingTabsContainer";
import PTTextInput from "./src/components/TextInput/PTTextInput";
import OrderStatus from "./src/screens/OrderStatus/OrderStatus";
import SignIn from "./src/screens/signin/SignIn";
import SignUp from "./src/screens/signup/SignUp";
import Welcome from "./src/screens/Welcome/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.formContainer}>
        <View style={styles.wrapper}>
            <PTTextInput />
        </View>
        <View style={styles.wrapper}>
      <PTButton
       onPress={() => {console.log("Pressed")}}
       title= "Sign Up"
       buttonBackgroundColor= "#333"
       buttonTextColor= "#fff"
       />
       </View>
       </View> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Welcome /> */}
      {/* <OrderStatus /> */}
      {/* <ProductCard /> */}
      <Header title="Account" />
      <SettingTabsContainer title="Settings">
        <SettingTabs title="About" />
        <SettingTabs title="Term & Condition" />
      </SettingTabsContainer>
      <SettingTabsContainer title="Account">
        <SettingTabs title="About" />
        <SettingTabs title="Term & Condition" />
      </SettingTabsContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PTCOLORS.secondaryLight,
  },
  formContainer: {
    justifyContent: "center",
    width: "80%",
  },
  wrapper: {
    marginVertical: 10,
  },
});
