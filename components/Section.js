import { StyleSheet, View, Text, Dimensions } from "react-native";

export default function Section(props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>{props.title}</Text>
      <View>{props.children}</View>
      <Text style={styles.text}>{props.footerText}</Text>
      <View style={styles.footerBottomLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: "10%",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  footerBottomLine: {
    height: 3,
    width: "70%",
    backgroundColor: "#2d9bc8",
    marginLeft: "15%",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    paddingVertical: 10,
    marginVertical: 10,
  },
});
