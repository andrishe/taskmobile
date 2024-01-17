import { StyleSheet } from "react-native";
import colors from "../../components/constants/colors.js";

// const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: colors.quinary,
    textAlign: "center",
    marginVertical: 16,
  },
});

export default styles;
