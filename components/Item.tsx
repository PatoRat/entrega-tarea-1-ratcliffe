import { Image, StyleSheet, Text, View } from "react-native";

import { ItemProps } from "@/scripts/data-and-tipe";

const Item = ({ imagen, titulo, precio }: ItemProps) => (
    <View>
        <Image source={imagen} style={styles.imagenInicial} />
        <Text>{titulo}</Text>
        <Text>{precio}</Text>
    </View>
);

const styles = StyleSheet.create({
    imagenInicial: {
        width: 50,
        height: 50,
        marginBottom: 8
    },
});

export default Item;