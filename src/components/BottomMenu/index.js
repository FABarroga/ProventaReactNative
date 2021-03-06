import React from "react";
import { View } from "react-native";
import ComponentStyle from "./styles";
import { MenuButton } from "../MenuButton";

const BottomMenu = ({ navigation }) => {
  return (
    <View style={ComponentStyle.container}>
      <MenuButton
        image={require("../../assets/search_button.png")}
        label="Menu"
        onPress={() => navigation.navigate("SearchPage")}
      />
      <MenuButton
        image={require("../../assets/home_button.png")}
        label="Menu"
        onPress={() => navigation.navigate("HomePage")}
      />
      <MenuButton
        image={require("../../assets/login_button.png")}
        label="Menu"
        onPress={() => navigation.navigate("LoginPage")}
      />
    </View>
  );
};

export { BottomMenu };
