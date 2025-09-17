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
                style={{ margin: 10 }}
                onChangeText={setBusqueda}
                value={busqueda}
            />
            <FlatList
                data={IMAGENES}
                renderItem={({ item }) => {
                    if (item.titulo.toLocaleLowerCase().startsWith(busqueda.toLocaleLowerCase())) {
                        return (
                            <Item
                                imagen={item.imagen}
                                titulo={item.titulo}
                                precio={item.precio}
                            />
                        )
                    }
                    else {
                        return (
                            <View style={styles.separador} />
                        )
                    }
                }}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => (
                    <View style={styles.separador} />
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    separador: {
        margin: 10
    },
});

export default ListaProductos;