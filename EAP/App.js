/*=============================================================================
 |   File Purpose:  Starts app as whole
 |
 |       Author:  
 |     Language:  JavaScript
 |                      NAME OF THE COMPILER USED TO COMPILE IT WHEN IT
 |                      WAS TESTED
 |   To Compile:  in terminal run 'npm start' command
 |
 +-----------------------------------------------------------------------------
 |
 |  Description:  DESCRIBE THE PROBLEM THAT WAS WRITTEN TO
 |      SOLVE.
 |
 |        Input:  NONE
 |
 |       Output:  DESCRIBE THE OUTPUT PRODUCED.
 |
 |    Algorithm:  
 |
 |   Required Features Not Included:  Start on Main Screen
 |
 |   Known Bugs:  
 |
 *===========================================================================*/

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
// npm install axios
import axios from 'axios';
// import { searchInstitutions } from "./Database_Functions";

export default function App() {
  const [searchTerm, setTerm] = useState(""); // for search bar

  // connect frontend to backend
  const [institutionData, setInstitutionData] = useState("");
  const getInstitutions = async () => {
    console.log("entered getInstitutions");
    
    // have to use http: not https:  
    const newData = await fetch("http://10.0.2.2:1433/api/searchInstitution", {
      method: "POST",
      headers: {
      // describes how data is being sent and accepted
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: searchTerm,
      }),
    }).then((response) => {
      response.text();
      console.log(response.text());
    })
    .catch((error) => {
      console.log('fetch error: ', error)
    });
    // console.log(newData);
    // setInstitutionData(newData.result);
      
  };
  // console.log("App Starting..");
  return (
    <View style={styles.container}>
      <Text>{returnedData}</Text>
      <Text>{searchTerm}</Text>
      <TextInput
        style={styles.input}
        placeholder="Search Institutions..."
        onChangeText={(val) => setTerm(val)} //Sets searchTerm to whatever is typed in search textbox at any moment
      />
      <Button onPress={() => getInstitutions()} title="click" />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
