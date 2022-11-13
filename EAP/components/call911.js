import React, { Component, UseState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import call from 'react-native-phone-call'

const args = {
  number: '911', // String value with the number to call
  prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
  skipCanOpen: true // Skip the canOpenURL check
  
  
}

// call(args).catch(console.error)

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
        backgroundColor: "#FFFFFF",
        paddingTop: "3%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#000000",
        height: 60,
        width: 200,
    },

    buttonText: {
        color: "#000000",
        fontSize: 20,
        alignSelf: "center"
    }
});

export default CallContainer;