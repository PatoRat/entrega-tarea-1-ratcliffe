import { Ventana } from "@/components/Ventana";
import { View } from "react-native";

export default function PerfilIndex() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ventana texto="Nombre Apellido" />
    </View>
  );
}