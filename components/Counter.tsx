import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";



export function Counter() {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount(prev => prev + 1);
  }

  function disminuir() {
    setCount(prev => prev - 1);
  }

  return (
    <>
      <Text style={{
        flex: 1,
        fontWeight: "bold",
        fontSize: 20
      }}>
        {"Estado actual: " + count}
      </Text>
      <View style={{ flex: 2 }}>
        <Button title="Incrementar (Button)" onPress={aumentar} />
      </View>
      <View style={{ flex: 2 }}>
        <Pressable onPress={disminuir} style={{
          borderWidth: 2,
          borderColor: "blue",
          borderRadius: 8,
          padding: 10,
          margin: 10,
          backgroundColor: "blue"
        }}>
          <Text style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
            userSelect: "none"
          }}>
            Disminuir (Pressable)
          </Text>
        </Pressable>
      </View>
    </>
  );
}