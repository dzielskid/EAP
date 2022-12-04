import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';

import { SearchBar } from 'react-native-screens';
import SearchList from './SearchList';

const SearchContainer = () => {
  const [input, setInput] = useState("");
  
  const words = [
    {
      name: "West Virginia University",
      id: "1"
    },
    {
      name: "West Liberty",
      id: "2"
    },
    {
      name: "Marshall",
      id: "3"
    }
  ];
  /*
  const [data, setData] = useState("");
  useEffect(() => {
    try {
    const getData = async() => {
      console.log("getData");
      const apiResponse = await fetch(
        "http://10.0.2.2:5000/api/searchInstitution"
      );
      console.log("fetch complete");
      console.log(apiResponse);
      const dbData = await apiResponse.json();
      setData(dbData);
    };
    getData();
    }
    catch (err) {
      console.log(err)
    }
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
          style={{marginLeft: 1, marginRight: 4}}
        />
        <TextInput  
          value={input}
          onChangeText={(text) => setInput(text)}
          style={{fontSize: 20}} 
          placeholder="Search Institutions"
        />
      </View>
      <SearchList data={words} input={input} setInput={setInput} />
    </View>
  )
}

export default SearchContainer

const styles = StyleSheet.create({})