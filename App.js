import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Footer from "./screens/Footer";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Meu body</Text>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50
  }
});
