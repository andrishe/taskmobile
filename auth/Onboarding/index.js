import React from "react";
import { Image, View, Text, Button as RNButton } from "react-native";
import styles from "./styles";
import Button from "../../components/Button/index.js";
import colors from "../../components/constants/colors.js";

const Onboarding = ({ navigation }) => {
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

        <Button
          firstText={{ color: colors.septenary }}
          onPress={() => navigation.navigate("Signin")}
        >
          Login
        </Button>
        <Button type={"blue"} onPress={() => navigation.navigate("Signup")}>
          Get started
        </Button>
      </View>
    </View>
  );
};

export default Onboarding;
