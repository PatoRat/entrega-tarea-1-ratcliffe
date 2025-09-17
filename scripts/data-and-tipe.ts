import { ImageSourcePropType } from "react-native";

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
    imagen: ImageSourcePropType,
    titulo: string,
    precio: string,
    descripcion: string
};

export { IMAGENES, ItemProps };

