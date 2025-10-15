
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import {Style} from './src/styles/GlobalStyles.module'

export default function App() {
  return(

    <View style={Style.container}>

      <Home/>
      
    </View>
    
  ) 
}

