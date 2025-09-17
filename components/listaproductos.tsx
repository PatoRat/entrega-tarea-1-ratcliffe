import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";

const IMAGENES = [
    {
        id: '1',
        imagen: require("@/assets/images/tostadora.png"),
        titulo: 'Tostadora',
        descripcion: 'Nueva de SmartLife',
        precio: '$65000'
    },
    {
        id: '2',
        imagen: { uri: 'https://www.lg.com/cac/images/microondas/md07583967/gallery/d1.jpg' },
        titulo: 'Microondas',
        descripcion: 'Alta calidad LG',
        precio: '$146950'
    },
    {
        id: '3',
        imagen: { uri: 'https://osterar.vtexassets.com/arquivos/ids/157691-800-auto?v=638772137804400000&width=800&height=auto&aspect=true' },
        titulo: 'Licuadora',
        descripcion: 'Oster Argentina',
        precio: '$240000'
    },
];

type ItemProps = {
    imagen: any,
    titulo: string,
    descripcion: string,
    precio: string
};

const Item = ({ imagen, titulo, descripcion, precio }: ItemProps) => (
    <View>
        <Image source={imagen}  />
        <Text>{titulo}</Text>
        <Text>
            {descripcion}{" "}
            <Text>
                {precio}
            </Text>
        </Text>
    </View>
);

export const ListaProductos = () => {
    return (
        <FlatList
            data={IMAGENES}
            renderItem={({ item }) =>
                <Item
                    imagen={item.imagen}
                    titulo={item.titulo}
                    descripcion={item.descripcion}
                    precio={item.precio}
                />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
                <View style={{ margin: 10 }} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    
});