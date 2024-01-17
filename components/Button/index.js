import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ onPress, type, firstText, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === "blue" ? styles.blueBg : {}]}
    >
      <Text style={[styles.text, firstText]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
