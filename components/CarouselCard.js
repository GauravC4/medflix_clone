import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("screen").width - 20;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export default function CarouselCard({ item, index }) {
  return (
    <View style={styles.container} key={index}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.work}>{item.work}</Text>
      <View style={styles.more}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Know more</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303030",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    paddingRight: 10,
    elevation: 7,
    alignItems: "center",
  },
  image: {
    width: ITEM_WIDTH / 2,
    height: ITEM_WIDTH / 2,
    borderRadius: ITEM_WIDTH / 4,
    margin: 15,
  },
  more: {
    backgroundColor: "#d9bd37",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  name: {
    color: "#d34182",
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 5,
  },
  work: {
    color: "white",
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 30,
  },
});
