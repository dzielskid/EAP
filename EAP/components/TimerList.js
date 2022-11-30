import React, {Component} from 'react';
import { ScrollView, FlatList, StyleSheet, Text } from 'react-native';

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class ListComponent extends Component {
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <FlatList
                    data={this.props.lap}
                    renderItem={({ item, index }) => <Text key={index} style={styles.item}>{item.curTime}  ({padToTwo(item.hr)}:{padToTwo(item.min)}:{padToTwo(item.sec)}) - {item.inputText}</Text>}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        maxHeight: 150,
        width: 400,
        backgroundColor: "#FFFFFF",
    },

    item: {
        padding: 5,
        fontSize: 15,
        height: 50,
        color: "#000000",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        marginBottom: 1
    },
})


export default ListComponent;