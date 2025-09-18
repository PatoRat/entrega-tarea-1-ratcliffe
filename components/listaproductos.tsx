import Item from "@/components/Item";
import { IMAGENES } from "@/scripts/data-and-tipe";
import { useState } from "react";
import {
    FlatList,
    StyleSheet,
    TextInput,
    View
} from "react-native";

const ListaProductos = () => {
    const [busqueda, setBusqueda] = useState("");

    return (
        <>
            <TextInput
                style={styles.inputBusqueda}
                onChangeText={setBusqueda}
                value={busqueda}
                placeholder="Escribe aquí..."
            />
            <FlatList
                data={IMAGENES.filter((item) =>
                    item.titulo.toLowerCase().startsWith(busqueda.toLowerCase())
                )}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.separador}>
                            <Item
                                imagen={item.imagen}
                                titulo={item.titulo}
                                precio={item.precio}
                                descripcion={item.descripcion}
                            />
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </>
    );
};

const styles = StyleSheet.create({
    separador: {
        marginVertical: 10,
        alignItems: "center",
    },
    inputBusqueda: {
        width: "90%",
        padding: 10,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
        fontSize: 16,
        textAlign: "center"
    },
});

export default ListaProductos;