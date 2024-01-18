import React from "react";
import { Text, Button as RNButton, SafeAreaView } from "react-native";
import styles from "./styles.js";
import Button from "../../components/Button/index.js";

import Title from "../../components/Title/index.js";
import Input from "../../components/Input/index.js";

const Signin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>

      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button>Login</Button>

      <Text style={styles.footerText}>
        Not registered?
        <Text
          style={styles.footLink}
          onPress={() => navigation.navigate("Signup")}
        >
          {" "}
          Sign up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Signin;
