import { View, Text } from "react-native"

interface FilmesProps{
    data:{
        nome: string,
        sinopse: string,
        foto: string
    }
}


export const Filmes = ({data}:FilmesProps)=>{

    return(

        <View>

            <Text>{data.nome}</Text>

        </View>

    )

}