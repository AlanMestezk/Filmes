import { StyleSheet } from "react-native"


export const Style = StyleSheet.create(
    {

        card:{
            backgroundColor: 'lightblue',
            marginTop: 20,
            marginBottom:20,
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 22,
        },
        title:{

            fontSize:22,
            fontWeight: 'bold',
            marginBottom: 22

        },
        image:{
            zIndex: 2,
            width: 300,
            height: 190
        },
        button:{
            marginTop: 22,
            elevation: 2,
            backgroundColor: 'darkred',
            padding: 12,
            width: 100,
            borderRadius: 10

        },
        textButton:{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'aliceblue'

        }
    }
)