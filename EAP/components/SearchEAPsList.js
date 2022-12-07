import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EAPDetails from "./EAPDetails";

// the filter
const SearchList = ({ data, input, setInput, navigation, route, institutionID }) => {
  return (
      <ScrollView style={{marginTop: 10, maxHeight: "30%"}} >
        <FlatList
          data={data}
          renderItem={({item}) => {
            var itemInstitution = parseInt(item.foreign_key, 10);
            var screenInstittuion = parseInt(institutionID, 10);
            if(input === "" && itemInstitution == screenInstittuion) {
              return (
                <EAPDetails item={item} navigation={navigation}/>
              )
            }
            if(item.name.toLowerCase().includes(input.toLowerCase()) && itemInstitution == screenInstittuion) {
              return (
                <EAPDetails item={item} navigation={navigation}/>
              )
            }
          }}
        />
      </ScrollView>
  );
};



export default SearchList;

const styles = StyleSheet.create({});