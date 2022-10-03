import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Pressable , Alert } from 'react-native';

function CreateInstitutionScreen({ navigation }) {
    const [OrganizationName, setOrganizationName] = useState('WVU soccer Faculty');
    const [OrganizationAddress, setOrganizationAddress] = useState('13555 Peabody st');
    const [city, setCity] = useState('Morgantown');
    const [state, setState] = useState('WV');
    const [zip, setzip] = useState('26505');
    const [AdminName, setAdminName] = useState('Dale');
    const [AdminEmail, setAdminEmail] = useState('Dale.Dzielski@mail.wvu.edu');
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