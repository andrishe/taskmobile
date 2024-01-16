import React from "react";
import { Image, View, Text, Button as RNButton } from "react-native";
import styles from "./styles";
import Button from "../../components/Button/index.js";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={require("../../assets/Working.png")}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by working out all our task and boost your productivity
        </Text>

        <Button>Login</Button>
        <Button>Get started</Button>
      </View>
    </View>
  );
};

export default Onboarding;
