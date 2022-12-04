import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { interpolateNode } from "react-native-reanimated";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>
);

// the filter
const SearchList = ({ data, input, setInput }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  return (
      <View style={{marginTop: 10}} >
        <FlatList
          data={data}
          renderItem={({item}) => {
            if(input === "") {
              return (
                <View style={{marginVertical: 10}} >
                  <Text style={{fontSize:14, fontStyle:"bold"}}>{item.name}</Text>
                  <Text style={{borderColor:"gray", borderWidth:1, height:1, marginTop: 5}}>{item.name}</Text>
                </View>
              )
            }
            if(item.name.toLowerCase().includes(input.toLowerCase())) {
              return (
                <View style={{marginVertical: 10}} >
                  <Text style={{fontSize:14, fontStyle:"bold"}}>{item.name}</Text>
                  <Text style={{borderColor:"gray", borderWidth:1, height:1, marginTop: 5}}>{item.name}</Text>
                </View>
              )
            }
          }}
        />
      </View>
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