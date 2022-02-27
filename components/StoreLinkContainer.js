import { StyleSheet, View } from "react-native";

import StoreLink from "./StoreLink";

export default function StoreLinkContainer() {
  return (
    <View style={styles.container}>
      <StoreLink preStoreName="Get it on" storeName="Play"></StoreLink>
      <StoreLink preStoreName="Available on" storeName="App"></StoreLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "8%",
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
