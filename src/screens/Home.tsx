import { View, Text, FlatList } from "react-native";
import { Api } from "../services/api"
import { useEffect, useState } from "react";
import { Filmes } from "./components";

export const Home =()=>{

    const [filmes, setFilmes] = useState([])

    useEffect(
        ()=>{

            const loadFilmes = async()=>{

                const response = await Api.get('r-api/?api=filmes')

                setFilmes(response.data)
            }

            loadFilmes()

        }, []
    )

    return(

        <View>
            
            <FlatList 
                data={filmes}
                renderItem={
                    ({item}) => <Filmes data={item}/>
                }
            />

        </View>

    )
}