import { Text, View } from "react-native";
import { Counter } from "../components/Counter";

export default function ContadorIndex() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontWeight: "bold",
        fontSize: 20
      }}>Bienvenidos al contador!!</Text>
      <Counter />

    </View>
  );
}
