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
                data={IMAGENES}
                renderItem={({ item }) => {
                    if (item.titulo.toLocaleLowerCase().startsWith(busqueda.toLocaleLowerCase())) {
                        return (
                            <View style={styles.separador}>
                                <Item
                                    imagen={item.imagen}
                                    titulo={item.titulo}
                                    precio={item.precio}
                                />
                            </View>
                        )
                    }
                    else {
                        return (
                            <></>
                        )
                    }
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