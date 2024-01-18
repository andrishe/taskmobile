import React, { useState } from "react";
import { View, Text, SafeAreaView, Button as RNButton } from "react-native";
import styles from "./styles.js";
import Button from "../../components/Button/index.js";
import Input from "../../components/Input/index.js";
import Title from "../../components/Title/index.js";
import Checkbox from "../../components/Checkbox/index.js";

const Signup = ({ navigation }) => {
  const [agreed, setAgreed] = useState(false);

  const onCheckboxPress = () => {
    setAgreed(!agreed);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join th hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />

      <View>
        <Checkbox checked={agreed} onPress={onCheckboxPress} />
      </View>

      <Button type="blue">Create new account</Button>

      <Text style={styles.footerText}>
        Already registered?
        <Text
          style={styles.footLink}
          onPress={() => navigation.navigate("Signin")}
        >
          {" "}
          Sign in!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Signup;
