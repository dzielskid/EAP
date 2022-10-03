import * as React from 'react';
import { View, Text, Button } from 'react-native';

function CreateEditorScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //Add button to "invite" that returns to the account screen
        >
            <Text>Create Editor Screen</Text>
            <Button
                title="Invite"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

export { CreateEditorScreen };