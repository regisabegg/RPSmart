import React from "react";
import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native";
import { ButtonGroup, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");
class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ["Sobre", "Avisos", "Serviços"];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        // containerStyle={{
        //   height: 50,
        //   position: "absolute",
        //   left: 0,
        //   right: 0,
        //   bottom: 0
        // }}
      />
    );
  }
}

// const styles = StyleSheet.create({
//   footer: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "#4876FF",
//     padding: 25
//   }
// });

export default Footer;
