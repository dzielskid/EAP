import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Pressable , Alert } from 'react-native';

function CreateInstitutionScreen({ navigation }) {
    const [OrganizationName, setOrganizationName] = useState('');
    const [OrganizationAddress, setOrganizationAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setzip] = useState('');
    const [AdminName, setAdminName] = useState('');
    const [AdminEmail, setAdminEmail] = useState('');
    //const { onPress, title = 'Submit' } = props;
    return (
        <View style={styles.container}
        //Add button to "invite" that returns to the account screen
        >
            <Text>Organization Name:</Text>
            <TextInput
                placeholder=''
                style={styles.input}
                onChangeText={(value) => setOrganizationName(value)} />

            <Text>Organization Address:</Text>
            <TextInput
                placeholder=''
                style={styles.input}
                onChangeText={(value) => setOrganizationAddress(value)} />

            <Text>city:</Text>
            <TextInput
                placeholder=''
                style={styles.input}
                onChangeText={(value) => setCity(value)} />

            <Text>state:</Text>
            <TextInput
                placeholder=''
                style={styles.input}
                onChangeText={(value) => setState(value)} />

            <Text>zip:</Text>
            <TextInput
                placeholder=''
                style={styles.input}
                onChangeText={(value) => setzip(value)} />

            <Text>AdminName:</Text>
            <TextInput
                placeholder=''
                style={styles.input}
                onChangeText={(value) => setAdminName(value)} />

            <Text>AdminEmail:</Text>
            <TextInput
                placeholder=''
                style={styles.input}
                onChangeText={(value) => setAdminEmail(value)} />

            <Button
                title='Submit'
                onPress={() => {
                    Alert.alert('', 'New Institution Request Submitted')
                    navigation.goBack()
                }}
            />

            <Text style={styles.result}>name: {OrganizationName}, address: {OrganizationAddress}, city: {city}, state: {state}, zip:{zip}, AdminName:{AdminName}, AdminEmail: {AdminEmail}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
    }
});

export { CreateInstitutionScreen };