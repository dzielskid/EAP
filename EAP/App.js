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
import { StyleSheet, Text, View, TextInput } from "react-native";
// import { searchInstitutions } from "./Database_Functions";
import { queryDatabase } from "././EAP_Backend/DB_Connection";

export default function App() {
  const [searchTerm, setTerm] = useState("");
  //To use this ^^^ use {searchTerm}

  // console.log("App Starting.."); (val) => setTerm(val)
  return (
    <View style={styles.container}>
      <Text>One small step for man..</Text>
      <TextInput
        style={styles.input}
        placeholder="Search Institutions..."
        onChangeText={queryDatabase()} //Sets searchTerm to whatever is typed in search textbox at any moment
        // onSubmitEditing={searchInstitutions(searchTerm)}
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
