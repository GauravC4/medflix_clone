import { StyleSheet, View, ScrollView, StatusBar } from "react-native";

import Header from "./components/Header";
import IntroCard from "./components/IntroCard";
import StoreLinkContainer from "./components/StoreLinkContainer";
import Stakeholders from "./components/Stakeholders";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <IntroCard />
        <StoreLinkContainer />
        <Stakeholders />
        <Stakeholders />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#000",
    top: StatusBar.currentHeight,
  },
});
