import {View, Text, TouchableOpacity} from 'react-native'
import {Style} from '../styles/ModalStyles.module'

interface ModalSinopsePorps{
    sinopse: string,
    closeModal: ()=> void
}

export const ModalSinopse = ({sinopse, closeModal}: ModalSinopsePorps)=>{

    return(

        <View style={Style.container}>

            <Text style={Style.text}>{sinopse}</Text>

            <TouchableOpacity 
                style={Style.button}
                onPress={closeModal}
            >
            
                <Text style={Style.textButton}>Fechar</Text>
            
            </TouchableOpacity>

        </View>
    )

}