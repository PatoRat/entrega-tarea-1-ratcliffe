import { ItemProps } from "@/scripts/data-and-tipe";
import Item from "@/src/components/Item";
import { URL_BACKEND } from '@/src/config';
import { useEffect, useState } from "react";
import {
    FlatList,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

const ListaProductos = () => {
    const [busqueda, setBusqueda] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [tituloProducto, setTituloProducto] = useState("");
    const [imagenURLProducto, setImagenURLProducto] = useState("");
    const [descripcionProducto, setDescripcionProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [PRODUCTOS, setProductos] = useState<ItemProps[]>([]);


    const cargarProductos = async () => {
        try {
            const response = await fetch(`${URL_BACKEND}/products`);
            if (!response.ok) {
                throw new Error('No se pudo traer los productos:' + response.status);
            }

            const productos = await response.json();
            setProductos(productos);

        } catch (error) {
            console.error("Error buscando los productos: ", error);
        }
    }

    const crearNuevoProducto = async () => {
        const producto: Omit<ItemProps, "id"> = {
            imagenURL: imagenURLProducto,
            titulo: tituloProducto,
            precio: precioProducto,
            descripcion: descripcionProducto
        };
        try {
            const response = await fetch(`${URL_BACKEND}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(producto),
            });

            if (!response.ok) {
                throw new Error('Fallo el crear producto: ' + response.status);
            }

            const nuevoProducto = await response.json();
            console.log('Producto creado:', nuevoProducto);

            setModalVisible(!modalVisible);
            setDescripcionProducto("");
            setImagenURLProducto("");
            setPrecioProducto("");
            setTituloProducto("");
            await cargarProductos();

        } catch (error) {
            console.error('Error creando producto:', error);
        }
    }

    useEffect(() => {
        cargarProductos();
    }, []);


    return (
        <>
            <TextInput
                style={styles.inputBusqueda}
                onChangeText={setBusqueda}
                value={busqueda}
                placeholder="Escribe aquí..."
            />
            <FlatList
                data={PRODUCTOS.filter((item) =>
                    item.titulo.toLowerCase().startsWith(busqueda.toLowerCase())
                )}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.separador}>
                            <Item
                                imagenURL={item.imagenURL}
                                titulo={item.titulo}
                                precio={item.precio}
                                descripcion={item.descripcion}
                            />
                        </View>
                    )
                }}
                keyExtractor={item => item.id.toString()}
            />
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <TextInput
                        placeholder="Título"
                        value={tituloProducto}
                        onChangeText={setTituloProducto}
                        style={styles.modalInput}
                    />
                    <TextInput
                        placeholder="Descripcion"
                        value={descripcionProducto}
                        onChangeText={setDescripcionProducto}
                        style={styles.modalInput}
                    />
                    <TextInput
                        placeholder="Precio"
                        value={precioProducto}
                        onChangeText={setPrecioProducto}
                        style={styles.modalInput}
                    />
                    <TextInput
                        placeholder="URL Imagen"
                        value={imagenURLProducto}
                        onChangeText={setImagenURLProducto}
                        style={styles.modalInput}
                    />
                    <Pressable style={styles.modalButton} onPress={crearNuevoProducto}>
                        <Text style={styles.modalButtonText}>Guardar</Text>
                    </Pressable>
                </View>
            </Modal>
            <Pressable style={styles.modalButton} onPress={() => { setModalVisible(!modalVisible) }}>
                <Text style={styles.modalButtonText}>Nuevo producto</Text>
            </Pressable>
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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f9f9f9",
    },
    modalInput: {
        width: "90%",
        padding: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
        fontSize: 16,
    },
    modalButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 12,
        alignItems: "center",
        width: "90%",
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default ListaProductos;
