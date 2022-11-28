import { useContext, useCase} from 'react';
import { View, Button, Text, TouchableOpacity, Alert, StyleSheet, Touchable } from 'react-native';
import { LoginContext, LoginProvider } from '../Login_Context';


function AccountScreen({ navigation }) {
    const { isSignedIn, setSignedIn, username, setUsername, userLevel, setUserLevel } = useContext(LoginContext)
    return (
        <View style={{ flex: 1, paddingVertical:25 }}>
            <TouchableOpacity
                style={styles.buttons}
                disabled={!(userLevel === "Super Admin")}
                onPress={() => navigation.navigate('Verify Institutions')}
            >
                <Text style={styles.buttonstext}>Accept New Institutions</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttons}
                onPress={() => navigation.navigate('Create Institution')}
            >
                <Text style={styles.buttonstext}>Request New Institution</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttons}
                disabled={!(userLevel === "Super Admin")}
                onPress={() => navigation.navigate('Create Admin')}
            >
                <Text style={styles.buttonstext}>Add Admin</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttons}
                disabled={!(userLevel === "Super Admin")}
                onPress={() => navigation.navigate('Delete Admin')}
            >
                <Text style={styles.buttonstext}>Remove Admin</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttons}
                disabled={!(userLevel === "Admin")}
                onPress={() => navigation.navigate('Create Editor')}
            >
                <Text style={styles.buttonstext}>Add Editor</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttons}
                disabled={!(userLevel === "Admin")}
                onPress={() => navigation.navigate('Delete Editor')}
            >
                <Text style={styles.buttonstext}>Remove Editor</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttons}
                disabled={!(isSignedIn)}
                onPress={() => {
                    setSignedIn(false)
                    setUsername("Guest")
                    setUserLevel("Guest")
                    Alert.alert('User Logged Out')
                    navigation.goBack()
                }}
            >
                <Text style={styles.buttonstext}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#DDDDDD',
        borderWidth: 1,
    },
    buttonstext: {
        fontSize: 30,
        padding: 20,
    }
})

export { AccountScreen };