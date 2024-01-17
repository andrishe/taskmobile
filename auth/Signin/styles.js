import { StyleSheet } from "react-native";
import colors from "../../components/constants/colors.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  footerText: {
    fontSize: 16,
    color: colors.blText,
  },
  footLink: {
    color: colors.p,
  },
});

export default styles;
