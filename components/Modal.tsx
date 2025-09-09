// La idea es buscar un style que haga a modo popUp y que se maneje internamente como un Stack
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Modal = (props: { texto: string }) => {
    const [display, setDisplay] = useState("none");

    const styles = myStyles(display)

    const abrirModal = () => {
        setDisplay(prev =>{
            if (prev === "none") {
                return "flex"
            }
            else{
                return "none"
            }
        });
    };

    return (
        <>
            <Text>
                {props.texto}
            </Text>
            <Pressable style={styles.boton} onPress={abrirModal}>
                <Text>
                    Cambiar nombre
                </Text>
            </Pressable>
            <View style={styles.ventana}>
                <Text>Puto</Text>
            </View>
        </>
    );
};

const myStyles = (state: string) => (
    StyleSheet.create({
        boton: {
            borderWidth: 2,
            borderColor: "blue",
            borderRadius: 8,
            padding: 10,
            margin: 10,
            backgroundColor: "blue"
        },
        ventana: {
            height: "40%",
            width: "40%",
            alignItems: "center",
            display: state
        }
    })
);