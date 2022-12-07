import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import GLOBAL from '../global.js'

const EAPDetails = ({ item, navigation }) => {
  return (
    <View style={{marginVertical: 10}} >
        <TouchableOpacity onPress={() => {
            GLOBAL.eapID = parseINT(item.id, 10)
            navigation.navigate('EAP')
          }} >
            <Text style={{fontSize:14, fontStyle:"bold"}}>{item.name}</Text>
        </TouchableOpacity>
        <Text style={{borderColor:"gray", borderWidth:.5, height:1, marginTop: 5}}>{item.name}</Text>
    </View>
  )
}

export default EAPDetails

const styles = StyleSheet.create({})