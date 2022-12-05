import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';

import SearchList from './SearchInstitutionsList';

const SearchEAPsContainer = ({ navigation, route }) => {
  const {institutionID} = route.params;
  const [input, setInput] = useState("");
  
  const EAPs = [
      {
        name: "Basketball Practice Court",
        foreign_key: '1',
        id: "2"
      },
      {
        name: "Colosseum",
        foreign_key: '1',
        id: "3"
      },
      {
        name: "Mylan Puskar Stadium",
        foreign_key: '1',
        id: "5"
      },
      {
        name: "Shell Buliding",
        foreign_key: '1',
        id: "4"
      },
      {
        name: "Soccer Practice Fields",
        foreign_key: '1',
        id: "1"
      },
      {
        name: "Random Place",
        foreign_key: '2',
        id: "6"
      },
      {
        name: "Random Place 2",
        foreign_key: '2',
        id: "7"
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
          style={{marginLeft: 1, marginRight: 4 }}
        />
        <TextInput  
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.searchBox} 
          placeholder="Search Facility"
        />
      </View>
      <SearchList data={EAPs} input={input} setInput={setInput} navigation={navigation} institutionID={institutionID} />
    </View>
  )
}

export default SearchEAPsContainer

const styles = StyleSheet.create({
    searchBox: {
        fontSize: 20,
        height: 30,
        width: 250,
        borderColor: 'light-gray', 
        borderWidth: 1,
        borderRadius: 10
    }
})