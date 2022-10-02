import * as React from 'react';
import { View, Text } from 'react-native';

function DeleteAdminScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //Add button to "invite" that returns to the account screen
        >
            <Text>Delete Admin Screen</Text>
        </View>
    );
}

export { DeleteAdminScreen };