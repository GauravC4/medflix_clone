import { StyleSheet, View, Text } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.footerTop}>
        <View style={{ flex: 2 }}>
          <Text style={[styles.text, styles.textBold]}>Help Center</Text>
          <Text style={styles.text}>support@medflix.app</Text>
          <Text style={styles.text}>+91 9023729662</Text>
          <Text style={styles.text}>FAQs</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.text, styles.textBold]}>Follow us on</Text>
          <Text style={styles.text}>Instagram</Text>
          <Text style={styles.text}>Facebook</Text>
          <Text style={styles.text}>Twitter</Text>
        </View>
      </View>
      <View style={styles.footerBottom}>
        <View style={styles.footerBottomText}>
          <Text style={{ paddingRight: 20, color: "white", fontSize: 16 }}>
            Terms
          </Text>
          <Text style={{ color: "white" }}>{"\u2B24"}</Text>
          <Text style={{ paddingLeft: 20, color: "white", fontSize: 16 }}>
            Privacy
          </Text>
        </View>
        <View style={styles.footerBottomText}>
          <Text style={{ paddingTop: 10, color: "gray", fontSize: 12 }}>
            {"\u00A9"} 2021 Plexus Professionals Network Pvt Ltd.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161719",
    marginTop: 10,
    padding: 15,
    paddingBottom: 50,
  },
  footerTop: {
    flexDirection: "row",
  },
  footerBottom: {
    paddingVertical: 20,
  },
  footerBottomText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "white",
    paddingVertical: 5,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
