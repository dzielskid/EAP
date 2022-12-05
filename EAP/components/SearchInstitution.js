import { StyleSheet, View } from 'react-native'
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';

import SearchList from './SearchInstitutionsList';

const SearchInstitutionContainer = ({navigation}) => {
  const [input, setInput] = useState("")
  
  const institutions = [
    {
      name: "Marshall",
      id: "3"
    },
    {
      name: "Fairmont State",
      id: "4"
    },
    {
      name: "Pennsylvania State University",
      id: "5"
    },    
    {
      name: "West Liberty",
      id: "2"
    },
    {
      name: "West Virginia University",
      id: "1"
    }

  ];
  /*
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
    const getData = async() => {
      console.log("getData");
      const apiResponse = await fetch("http://10.0.2.2:5000/api/searchInstitution",
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      },)
        .then ((response) => response.json)
        .then ((json)) => setData((json))
        .catch((error) => console.error(error))
      console.log("fetch complete");
  }, []);
  console.log(data);
  */
  
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{marginLeft: 1, marginRight: 4, marginTop: -50}}
        />
        <TextInput  
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.searchBox} 
          placeholder="Search Institutions"
        />
      </View>
      <SearchList 
        data={institutions} 
        input={input} 
        setInput={setInput} 
        navigation={navigation}
      />
    </View>
  )
}

export default SearchInstitutionContainer

const styles = StyleSheet.create({
  searchBox: {
    marginTop:-50,
    fontSize: 20,
    height: 30,
    width: 250,
    borderColor: 'light-gray', 
    borderWidth: 1,
    borderRadius: 10
  }
})