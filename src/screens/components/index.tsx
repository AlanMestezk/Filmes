import { View, Text, Image, TouchableOpacity } from "react-native"
import { Style } from "../../styles/FilmesStyles.module"

interface FilmesProps{

    data:{

        nome   : string,
        foto   : string,
        sinopse: string
    }
}



export const Filmes = ({data}:FilmesProps)=>{

    console.log(data.foto)

    return(

        <View >

            <View style={Style.card}>

                <Text style={Style.title}>{data.nome}</Text>

                <Image 
                    source={{uri: data.foto}}
                    style={Style.image}
                   
                />

                <TouchableOpacity style={Style.button}>

                    <Text style={Style.textButton}>Sinopse</Text>

                </TouchableOpacity>


            </View>

        </View>

    )

}