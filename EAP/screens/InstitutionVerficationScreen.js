import * as React from 'react';
import { View, Text } from 'react-native';

function InstitutionVerificationScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //TODO Add Verify and Deny buttons, both return to institution requests screen
        >
            <Text>Institution Verification Screen</Text>
        </View>
    );
}

export { InstitutionVerificationScreen };