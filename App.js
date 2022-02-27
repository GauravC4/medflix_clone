import { StyleSheet, Text, View, StatusBar } from "react-native";

import Header from "./components/Header";
import IntroCard from "./components/IntroCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <IntroCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    top: StatusBar.currentHeight,
  },
});
