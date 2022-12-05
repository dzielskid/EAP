import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, button, TouchableOpacity, Button } from 'react-native';
import { LoginContext, LoginProvider } from '../Login_Context';

function LoginScreen({ navigation }) {
    const { isSignedIn, setSignedIn, username, setUsername, userLevel, setUserLevel } = useContext(LoginContext)

    const tempUserCreds = {
        "editor@gmail.com" : "password",
        "admin@gmail.com" : "password",
        "superadmin@gmail.com" : "password"
    }
    const tempUserLevels = {
        "editor@gmail.com" : "Editor",
        "admin@gmail.com": "Admin",
        "superadmin@gmail.com" : "Super Admin"
    }

    const [IUsername, setIUsername] = useState('');
    const [IPassword, setIPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    function login(tempUsername, tempPassword) {
        console.log("login function called.")
        if (!(tempUsername in tempUserCreds)) {
            // If no such username exists in database
            console.log("LOGINUSER MESSAGE: no such username in temp, fail")
            setErrorMessage('ERROR: No such user exists.')
            return false
        } else if (tempUserCreds[tempUsername] === tempPassword) {
            // If password given matches for given username
            console.log("LOGINUSER MESSAGE: Password matches, success")
            setSignedIn(true)
            setUsername(IUsername)
            setUserLevel(tempUserLevels[IUsername])
            setErrorMessage('')
            return true
        } else {
            // If password given doesn't match for given username
            console.log("LOGINUSER MESSAGE: Password doesn't match, fail")
            setErrorMessage('ERROR: Given username/password is incorrect.')
            return false
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //Add button to "Login" that returns to the account screen
        >
            <Text>{ errorMessage }</Text>
            <Text>Username: </Text>
            <TextInput
                placeholder=''
                style={styles.inputBox}
                onChangeText={(value) => setIUsername(value)}
            />
            <Text>Password: </Text>
            <TextInput
                placeholder=''
                style={styles.inputBox}
                secureTextEntry={ true }
                onChangeText={(value) => setIPassword(value)}
            />
            <View style={styles.space}/>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                    console.log(IUsername + " : " + IPassword)
                    if (login(IUsername, IPassword)) {navigation.goBack()}
                    }
                }
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        width: 250,
        fontsize: 20,
        borderWidth: 1,
    },
    space: {
        height: 50,
    },
    loginButton: {
        backgroundColor: "#2159db",
        paddingVertical: 5,
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#173e99",
        height: 40,
        width: 150,
    },
    loginText: {
        color: "#f3f5fb",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export { LoginScreen };