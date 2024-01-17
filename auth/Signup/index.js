import React from "react";
import { Image, View, Text, Button as RNButton } from "react-native";
import styles from "./styles.js";
import Button from "../../components/Button/index.js";
import colors from "../../components/constants/colors.js";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Button>Create new account</Button>
    </View>
  );
};

export default Signup;
