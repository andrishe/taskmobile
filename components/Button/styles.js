import { StyleSheet } from "react-native";
import colors from "../constants/colors.js";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: colors.quaternary,
    fontSize: 16,
    fontWeight: "bold",
  },
  blueBg: {
    backgroundColor: colors.septenary,
  },
});

export default styles;
