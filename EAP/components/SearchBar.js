import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({input, setInput}) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Feather
                        name="search"
                        size={20}
                        color="black"
                        style={{marginLeft: 1, marginRight: 4}}
                    />
                    <TextInput  
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        style={{fontSize: 20}} 
                        placeholder="SearchInstitutions"
                    />
                </View>
        </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})