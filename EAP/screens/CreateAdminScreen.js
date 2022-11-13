import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function CreateAdminScreen({ navigation }) {
    const [Editor, setEditorName] = useState('');
    const [Editoremail, setEditorEmail] = useState('');
    const [Organization, setOrganizationName] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //Add button to "invite" that returns to the account screen
        >

            <Text>Admin Name: </Text>
            <TextInput
                placeholder=''
                style={styles.inputBox}
                onChangeText={(value) => setEditorName(value)}
            />

            <Text>Admin Email: </Text>
            <TextInput
                placeholder=''
                style={styles.inputBox}
                onChangeText={(value) => setEditorEmail(value)}
            />

            <Text>Organization: </Text>
            <TextInput
                placeholder=''
                style={styles.inputBox}
                onChangeText={(value) => setOrganizationName(value)}
            />

            <Button
                title='Invite'
                onPress={() => {
                    navigation.goBack()
                    console.log('New Editor Added')
                }}
            />
            <Text>Admin Name: {Editor}</Text>
            <Text>Admin Email: {Editoremail}</Text>
            <Text>Admin Organization: {Organization}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    inputBox: {
        width: 250,
        fontsize: 20,
        borderWidth: 1,
    },
});

export { CreateAdminScreen };