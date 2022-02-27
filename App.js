import { StyleSheet, View, ScrollView, StatusBar, Image } from "react-native";

import Header from "./components/Header";
import IntroCard from "./components/IntroCard";
import StoreLinkContainer from "./components/StoreLinkContainer";
import Stakeholders from "./components/Stakeholders";
import Section from "./components/Section";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <IntroCard />
        <StoreLinkContainer />
        <Stakeholders />
        <Section
          title="An experience like no other"
          footerText="Get on stage with panelists, answer polls, express with emojis - Experience a whole new way of learning medicine"
        >
          <Image
            style={styles.demoImg}
            source={require("./assets/eye_demo.png")}
            resizeMode="cover"
          />
        </Section>
        {/* // to be removed */}
        <Stakeholders />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    top: StatusBar.currentHeight,
  },
  demoImg: {
    borderRadius: 10,
  },
});
