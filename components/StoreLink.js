import { Image, StyleSheet, View, Text } from "react-native";

export default function StoreLink({ preStoreName, storeName }) {
  const icon =
    storeName === "Play"
      ? require("../assets/play_store_icon.png")
      : require("../assets/apple_store_icon.png");

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.icon} source={icon} />
      </View>
      <View>
        <Text style={{ color: "white", paddingLeft: 5 }}>
          <Text>Get it on{"\n"}</Text>
          <Text style={styles.brand}>{storeName} Store</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#161719",
    paddingHorizontal: 20,
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
