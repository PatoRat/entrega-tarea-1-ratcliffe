import { ListaProductos } from "@/components/listaproductos";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.pestaña}>
      <ListaProductos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pestaña: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});