import { View, Text, Image, TouchableOpacity, Modal } from "react-native"
import { Style } from "../../styles/FilmesStyles.module"
import { useState } from "react"
import { ModalSinopse } from "../../modal"

interface FilmesProps{

    data:{

        nome   : string,
        foto   : string,
        sinopse: string
    }
}



export const Filmes = ({data}:FilmesProps)=>{

    const [buttonActive, setButtonActive] = useState(false)

    const showSinopse = ()=>{

        setButtonActive(!buttonActive)
    }

    return(

        <View >

            <View style={Style.card}>

                <Text style={Style.title}>{data.nome}</Text>

                <Image 
                    source={{uri: data.foto}}
                    style={Style.image}
                   
                />

                <TouchableOpacity 
                    style={Style.button}
                    onPress={showSinopse}
                >

                    <Text style={Style.textButton}>Sinopse</Text>

                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    visible={buttonActive}
                    transparent
                    style={Style.modal}
                >

                    {
                        
                        <ModalSinopse 
                            sinopse={data.sinopse}
                            closeModal={showSinopse}
                        />

                    }


                </Modal>


            </View>

        </View>

    )

}