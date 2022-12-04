import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ItemDetails from "./ItemDetails";

// the filter
const SearchList = ({ data, input, setInput, navigation }) => {
  return (
      <ScrollView style={{marginTop: 10, maxHeight: "50%"}} >
        <FlatList
          data={data}
          renderItem={({item}) => {
            if(input === "") {
              return (
                <ItemDetails item={item} navigation={navigation}/>
              )
            }
            if(item.name.toLowerCase().includes(input.toLowerCase())) {
              return (
                <ItemDetails item={item} navigation={navigation}/>
              )
            }
          }}
        />
      </ScrollView>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});