import { StyleSheet, Image, View } from "react-native";

export default function Stakeholders() {
  return (
    <View>
      <Image source={require("../assets/stakeholders.png")} />
      <Image source={require("../assets/stakeholders_margin_bottom.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
