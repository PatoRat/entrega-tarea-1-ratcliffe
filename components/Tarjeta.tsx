import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// La funcion randomHexColor se la pedí a GPT
function randomHexColor(currentColor: string): string {
    let newColor: string;
    do {
        const hex = Math.floor(Math.random() * 0xffffff).toString(16);
        newColor = `#${hex.padStart(6, "0")}`;
    } while (newColor === currentColor);
    return newColor;
}

export const Tarjeta = (props: { texto: string }) => {
    const [colorFondo, setColorFondo] = useState(randomHexColor("#000000ff"));
    const [colorLetra, setColorLetra] = useState(randomHexColor("#000000ff"));

    const styles = myStyles(colorFondo, colorLetra);

    const cambio = () => {
        setColorFondo(randomHexColor(colorFondo));
        setColorLetra(randomHexColor(colorLetra));
    };

    return (
        <>
            <View style={styles.viewStyles}>
                <Pressable style={styles.cardStyles} onPress={cambio}>
                    <Text style={styles.textStyles}>{props.texto}</Text>
                </Pressable>
            </View>
        </>
    );
};

const myStyles = (colorFondo: string, colorLetra: string) => (
    StyleSheet.create({
        viewStyles: {
            width: "25%",
            height: "10%",
            justifyContent: "center",
            alignItems: "center"
        },
        cardStyles: {
            backgroundColor: colorFondo,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "80%"
        },
        textStyles: {
            color: colorLetra
        }
    })
);