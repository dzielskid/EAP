import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,button,Pressable, Button } from 'react-native';

function CreateEditorScreen({ navigation }) {
    const [Editor, setEditorName] = useState('');
    const [Editoremail, setEditorEmail] = useState('');
    const [Organization, setOrganizationName]=useState('');
      
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //Add button to "invite" that returns to the account screen
        >

            <Text>Editor Name: </Text>
            <TextInput
                placeholder=''
                style={styles.inputBox}
                onChangeText={(value) => setEditorName(value)}
            />

            <Text>Editor Email: </Text>
            <TextInput
                placeholder=''
                style={styles.inputBox}
                onChangeText={(value) => setEditorEmail(value)}
            />

            <Button
                title='Invite'
                onPress={() => {
                    navigation.goBack()
                    console.log('New Editor Added')
                }}
            />
            <Text>Editor Name: {Editor}</Text>
            <Text>Editor Email: {Editoremail}</Text>
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
               
export { CreateEditorScreen };