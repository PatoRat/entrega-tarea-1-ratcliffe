// La idea es buscar un style que haga a modo popUp y que se maneje internamente como un Stack
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export const Ventana = (props: { texto: string }) => {
    const [placeholder, setPlaceholder] = useState("")
    const [nombreYApellido, setNombreYApellido] = useState(props.texto)
    const [modalVisible, setModal] = useState(false);


    const accionarModal = () => {
        setModal(prev => !prev);
    };

    const guardarNombreYApellido = () => {
        setNombreYApellido(placeholder)
        accionarModal()
        setPlaceholder("")
    }

    return (
        <>
            <Text>
                {nombreYApellido}
            </Text>
            <Pressable style={styles.boton} onPress={accionarModal}>
                <Text style={{userSelect: "none"}}>
                    Cambiar nombre
                </Text>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={accionarModal}>
                <View style={styles.modal}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPlaceholder}
                        value={placeholder}
                    />
                    <Pressable style={styles.boton} onPress={guardarNombreYApellido}>
                        <Text style={{userSelect: "none"}}>
                            Guardar
                        </Text>
                    </Pressable>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    boton: {
        borderWidth: 2,
        borderColor: "blue",
        borderRadius: 8,
        padding: 10,
        margin: 10,
        backgroundColor: "blue",
    },
    modal: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})