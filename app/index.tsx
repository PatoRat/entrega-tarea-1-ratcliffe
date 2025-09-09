import { Link } from "expo-router";
import { Text, View } from "react-native";
// import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/contador">
        <Text>
          Contador
        </Text>
      </Link>
      <Link href="/tarjeta">
        <Text>
          Tarjeta
        </Text>
      </Link>
      <Link href="/perfil">
        <Text>
          Perfil
        </Text>
      </Link>
    </View>
  );
}