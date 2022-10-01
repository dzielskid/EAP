import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { InstitutionVerificationScreen } from './InstitutionVerficationScreen.js'

function AccountScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} /**
         Add Buttons for Accept New Institutions, Request New Institution, Create Admin, Remove Admin, Create Editor, Remove Editor, Logout*/>
            <Text>Account Screen</Text>
            <Button
                title="Accept New Institutions"
                onPress={() => navigation.navigate('Universitites')}
            />
        </View>
    );
}

export { AccountScreen };