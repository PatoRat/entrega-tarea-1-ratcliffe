import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.contenedor}>
      <Link href="/contador" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.textoLink}>Contador</Text>
        </Pressable>
      </Link>

      <Link href="/tarjeta" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.textoLink}>Tarjeta</Text>
        </Pressable>
      </Link>

      <Link href="/perfil" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.textoLink}>Perfil</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20
  },
  link: {
    backgroundColor: "#4a90e2",
    paddingVertical: 14,
    borderRadius: 10,
    marginVertical: 8,
    width: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  textoLink: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    userSelect: "none"
  }
});