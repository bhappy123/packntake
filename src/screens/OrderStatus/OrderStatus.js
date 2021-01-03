import React from "react";
import { StyleSheet, View } from "react-native";
import OrderCard from "../../components/OrderCard/OrderCard";

const OrderStatus = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View style={{ width: "90%" }}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </View>
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({});
