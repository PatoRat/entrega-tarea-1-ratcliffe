import ListaProductos from "@/components/ListaProductos";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.pestaña}>
        <ListaProductos />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  pestaña: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  }
});