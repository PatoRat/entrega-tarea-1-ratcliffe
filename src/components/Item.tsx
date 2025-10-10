import { ItemProps } from "@/scripts/data-and-tipe";
import { useState } from "react";
import {
    Image,
    ImageResizeMode,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";

const hitSlopValues = { top: 10, bottom: 10, left: 50, right: 50 };
const pressRetentionOffsetValues = { top: 20, bottom: 30, left: 50, right: 50 }

const Item = ({ imagenURL, titulo, precio, descripcion }: Omit<ItemProps, "id">) => {
    const [modalVisible, setModal] = useState(false);
    const [esFavorito, setFavorito] = useState(false);
    const [modoImagen, setResizeMode] = useState<ImageResizeMode>("contain")

    const styles = stylesDinamico(esFavorito);

    const accionarModal = () => {
        setModal(prev => !prev);
    };

    const marcarFavorito = () => {
        setFavorito(prev => !prev)
    };

    const modeContain = () => setResizeMode("contain");
    const modeCover = () => setResizeMode("cover");
    const modeStretch = () => setResizeMode("stretch");

    return (
        <>
            <View style={styles.card}>
                <Pressable
                    onPress={accionarModal}
                    onLongPress={marcarFavorito}
                    hitSlop={hitSlopValues}
                    pressRetentionOffset={pressRetentionOffsetValues}
                >
                    <Image source={{ uri: imagenURL }} style={styles.imagenInicial} resizeMode="contain" />
                    <Text style={styles.titulo}>{titulo}</Text>
                    <Text style={styles.precio}>{precio}</Text>
                </Pressable>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={accionarModal}>

                <View style={styles.container}>
                    <View style={styles.modal}>
                        <Image source={{ uri: imagenURL }} style={styles.imagenGrande} resizeMode={modoImagen} />
                        <Text style={styles.tituloGrande}>{titulo}</Text>
                        <Text style={styles.descripcion}>{descripcion}</Text>
                        <Text style={styles.precioModal}>{precio}</Text>
                        <Pressable style={styles.boton} onPress={modeContain}>
                            <Text style={styles.textoBoton}>Escalar Imagen Contain</Text>
                        </Pressable>
                        <Pressable style={styles.boton} onPress={modeCover}>
                            <Text style={styles.textoBoton}>Escalar Imagen Cover</Text>
                        </Pressable>
                        <Pressable style={styles.boton} onPress={modeStretch}>
                            <Text style={styles.textoBoton}>Escalar Imagen Stretch</Text>
                        </Pressable>
                        <Pressable style={styles.boton} onPress={accionarModal}>
                            <Text style={styles.textoBoton}>Cerrar Modal</Text>
                        </Pressable>
                    </View>
                </View>

            </Modal>
        </>
    )
};

const stylesDinamico = (isFavorito: boolean) => (
    StyleSheet.create({
        card: {
            width: 160,
            padding: 12,
            borderRadius: 12,
            backgroundColor: isFavorito ? 'yellow' : 'white',
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
        },
        imagenInicial: {
            width: 100,
            height: 100,
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
        imagenGrande: {
            width: 200,
            height: 200,
            marginBottom: 15,
        },
        tituloGrande: {
            fontSize: 22,
            fontWeight: "700",
            marginBottom: 8,
            textAlign: "center",
        },
        precioModal: {
            fontSize: 18,
            fontWeight: "600",
            color: "#2a9d8f",
            marginBottom: 12,
        },
        descripcion: {
            fontSize: 15,
            textAlign: "center",
            color: "#555",
        },
        container: {
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
        },
        modal: {
            width: "85%",
            margin: 20,
            backgroundColor: "white",
            borderRadius: 16,
            padding: 25,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
        },
        boton: {
            marginTop: 20,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            backgroundColor: "#2a9d8f",
        },
        textoBoton: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "600",
            userSelect: "none"
        }
    })
);

export default Item;