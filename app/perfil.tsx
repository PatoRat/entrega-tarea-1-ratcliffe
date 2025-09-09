import { Modal } from "@/components/Modal";
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
      <Modal texto="Patricio Ratcliffe" />
    </View>
  );
}