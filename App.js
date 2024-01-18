import Onboarding from "./auth/Onboarding";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Onboarding" component={Onboarding} />
        <stack.Screen name="Signin" component={Signin} />
        <stack.Screen name="Signup" component={Signup} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
