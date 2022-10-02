import * as React from 'react';
import { View, Text } from 'react-native';

function DeleteEditorScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //Add button to "invite" that returns to the account screen
        >
            <Text>Delete Editor Screen</Text>
        </View>
    );
}

export { DeleteEditorScreen };