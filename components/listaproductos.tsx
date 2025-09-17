import Item from "@/components/Item";
import { IMAGENES } from "@/scripts/data-and-tipe";
import {
    FlatList,
    TextInput,
    View
} from "react-native";

const ListaProductos = () => {
    const cambiarTexto = () => { }
    return (
        <>
            <TextInput
                style={{ margin: 10 }}
                onChangeText={cambiarTexto}
                value={"text"}
            />
            <FlatList
                data={IMAGENES}
                renderItem={({ item }) =>
                    <Item
                        imagen={item.imagen}
                        titulo={item.titulo}
                        precio={item.precio}
                    />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => (
                    <View style={{ margin: 10 }} />
                )}
            />
        </>
    );
};

export default ListaProductos;