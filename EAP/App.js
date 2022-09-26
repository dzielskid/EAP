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
// import { searchInstitutions } from "./Database_Functions";

export default function App() {
  // connect frontend to backend
  const [returnedData, setReturnedData] = useState("");
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: "GET", // gets response from backend and makes it appear in frontend
      headers: {
        // describes how data is being sent and accepted
        "content-type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    console.log(newData);
    setReturnedData(newData.result);
  };
  getData("/USERS");

  const [searchTerm, setTerm] = useState(""); // for search bar

  // console.log("App Starting..");
  return (
    <View style={styles.container}>
      <Button onPress={() => getData("/test2")} title="click" />
      <Text>{returnedData}</Text>
      <TextInput
        style={styles.input}
        placeholder="Search Institutions..."
        onChangeText={(val) => setTerm(val)} //Sets searchTerm to whatever is typed in search textbox at any moment
      />
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
