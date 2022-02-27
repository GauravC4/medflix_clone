import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
