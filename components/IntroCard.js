import { StyleSheet, View, Text } from "react-native";

export default function IntroCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>
        <Text>Watch the.. </Text>
        <Text style={styles.blueText}>best live {"\n"}talks </Text>
        <Text>in Medicine</Text>
      </Text>
      <Text style={styles.body}>
        Join the exclusive clubs by medical experts to explore live surgeries,
        discussions, quizzes & more in your specialty
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    color: "white",
    fontSize: 22,
    paddingTop: 10,
  },
  blueText: {
    color: "#429fce",
  },
  container: {
    backgroundColor: "blue",
    marginHorizontal: 15,
    marginTop: "15%",
  },
  head: {
    fontSize: 35,
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: "600",
    color: "white",
  },
});
