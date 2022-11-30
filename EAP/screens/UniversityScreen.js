import { useContext } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { LoginContext, LoginProvider } from '../Login_Context';
import TimerContainer from "../components/Timer.js"

import CallContainer from "../components/call911.js";

function UniversityScreen({ navigation }) {
    const { isSignedIn, setSignedIn, username, setUsername, userLevel, setUserLevel } = useContext(LoginContext)
    return (
        <View style={{ flex: 1, alignItems: 'center',}}
        //Flow sidebar: Login, Account, Logout      link to Add EAP, Incident Response Reports, EAP Display
        >
            <View style={styles.vSpace}/>
            <CallContainer style={{ paddingVertical: 50 }}>Call 911 Button</CallContainer>
            <TimerContainer />
            <View style={styles.buttonParent}>
                <TouchableOpacity
                    style={((userLevel === "Editor") || (userLevel === "Admin") || (userLevel === "Super Admin")) ? styles.button : styles.disabledButton}
                    disabled={((userLevel === "Editor") || (userLevel === "Admin") || (userLevel === "Super Admin")) ? false : true}
                    onPress={() => navigation.navigate('Upload EAP')}
                >
                    <Text style={ styles.buttonText }>Add EAP</Text>
                </TouchableOpacity>
                <View style={styles.space}/>
                <TouchableOpacity
                    style={((userLevel === "Editor") || (userLevel === "Admin") || (userLevel === "Super Admin")) ? styles.button : styles.disabledButton}
                    disabled={((userLevel === "Editor") || (userLevel === "Admin") || (userLevel === "Super Admin")) ? false : true}
                    onPress={() => navigation.navigate('Incident Reports')}
                >
                    <Text style={ styles.buttonText}>Reports</Text>
                </TouchableOpacity>
            </View>
            <Button
                title="Facility Example"
                onPress={() => navigation.navigate('EAP')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    vSpace: {
        height: 30,
    },

    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "5%",
        marginBottom: "5%"
    },

    space: {
        width: 20,
    },

    button: {
        backgroundColor: "#1a47af",
        paddingVertical: 5,
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#112d6e",
        height: 40,
        width: 150,
    },

    disabledButton: {
        backgroundColor: "#c2c2c2",
        paddingVertical: 5,
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#afafaf",
        height: 40,
        width: 150,
    },

    buttonText: {
        color: "#f3f5fb",
        fontSize: 20,
        //fontWeight: "bold",
        alignSelf: "center"
    }
    
});

export { UniversityScreen };