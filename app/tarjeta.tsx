import { Tarjeta } from "@/components/Tarjeta";
import { StyleSheet, View } from "react-native";

export default function TarjetaIndex() {
  return (
    <View
      style={ styles.viewStyles }
    >
      <Tarjeta texto="Hola" />
      <Tarjeta texto="Me" />
      <Tarjeta texto="Llamo" />
      <Tarjeta texto="Pato" />
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});