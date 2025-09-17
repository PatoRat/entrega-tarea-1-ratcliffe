import { Image, StyleSheet, Text, View } from "react-native";

import { ItemProps } from "@/scripts/data-and-tipe";

const Item = ({ imagen, titulo, precio }: ItemProps) => (
    <View style={styles.card}>
        <Image source={imagen} style={styles.imagenInicial} />
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.precio}>{precio}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        width: 160,
        padding: 12,
        borderRadius: 12,
        backgroundColor: "#fff",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    imagenInicial: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginBottom: 10,
    },
    titulo: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
        textAlign: "center",
    },
    precio: {
        fontSize: 14,
        color: "#2a9d8f",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default Item;