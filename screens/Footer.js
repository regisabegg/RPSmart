import React from "react";
import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");
class Footer extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { text: "Adicionar um item" };
  //   }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <View><Text>Meu Footer</Text></View> */}
        <View style={styles.footer}>
          <Button title="Sobre" />
          <Button title="Avisos" />
          <Button title="Serviços" />
        </View>
      </View>
    );
  }
}
//teste

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#4876FF",
    padding: 25
  }
});

export default Footer;
