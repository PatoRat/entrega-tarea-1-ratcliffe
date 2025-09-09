import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const Modal = (props: { texto: string }) => {
    const [nombre, setNombre] = useState(props.texto);

    const guardar = (nuevoNombre: string) => {
        setNombre(nuevoNombre);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                value={""}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});