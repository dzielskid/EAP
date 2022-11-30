import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import call from 'react-native-phone-call'

const args = {
  number: '911', // String value with the number to call
  prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
  skipCanOpen: true // Skip the canOpenURL check
  
  
}

class CallContainer extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={ () => call(args).catch(console.error) }
                >
                    <Text style={ styles.buttonText}>Call 911</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#f02d2d",
        paddingVertical: 5,
        display: "flex",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#a90b0b",
        height: 60,
        width: 200,
    },

    buttonText: {
        color: "#f3f5fb",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export default CallContainer;