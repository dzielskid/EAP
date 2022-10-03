import * as React from 'react';
import { View, Text, Button  } from 'react-native';

function CreateInstitutionScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //Add button to "invite" that returns to the account screen
        >
            <Text>Create Institution Screen</Text>
        </View>
    );
}

export { CreateInstitutionScreen };