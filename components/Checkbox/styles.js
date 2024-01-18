import { StyleSheet } from "react-native";
import colors from "../constants/colors.js";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.septenary,
    borderRadius: 3,
    height: 18,
    width: 18,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
  },
  innerSquare: {
    backgroundColor: colors.septenary,
    width: 8,
    height: 8,
  },
  checkedBox: {
    borderWidth: 2,
  },
});

export default styles;
