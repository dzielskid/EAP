import * as React from 'react';
import { View, Text } from 'react-native';

function LoginScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //Add button to "Login" that returns to the account screen
        >
            <Text>Login Screen</Text>
        </View>
    );
}

export { LoginScreen };