import { ItemProps } from "@/scripts/data-and-tipe";
import { useState } from "react";
import {
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";

const hitSlopValues = { top: 10, bottom: 10, left: 50, right: 50 };
const pressRetentionOffsetValues = { top: 20, bottom: 30, left: 50, right: 50 }

const Item = ({ imagen, titulo, precio, descripcion }: ItemProps) => {
    const [modalVisible, setModal] = useState(false);
    const [esFavorito, setFavorito] = useState(false);

    const styles = stylesDinamico(esFavorito);

    const accionarModal = () => {
        setModal(prev => !prev);
    };

    const marcarFavorito = () => {
        setFavorito(prev => !prev)
    };

    return (
        <>
            <View style={styles.card}>
                <Pressable
                    onPress={accionarModal}
                    onLongPress={marcarFavorito}
                    hitSlop={hitSlopValues}
                    pressRetentionOffset={pressRetentionOffsetValues}
                >
                    <Image source={imagen} style={styles.imagenInicial} />
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
                        <Image source={imagen} style={styles.imagenGrande} />
                        <Text style={styles.tituloGrande}>{titulo}</Text>
                        <Text style={styles.descripcion}>{descripcion}</Text>
                        <Text style={styles.precioModal}>{precio}</Text>
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
            backgroundColor: isFavorito ? 'yellow' : 'black',
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
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
        imagenGrande: {
            width: 200,
            height: 200,
            resizeMode: "contain",
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
    })
);

export default Item;