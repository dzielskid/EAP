import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import TimerContainer from "../components/Timer.js"

function UniversityScreen({ navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        //Flow sidebar: Login, Account, Logout      link to Add EAP, Incident Response Reports, EAP Display
        >
            <Text style={{ paddingVertical: 50 }}>Call 911 Button</Text>
            <TimerContainer />
            <Button
                title="Add EAP"
                onPress={() => navigation.navigate('Upload EAP')}
            />
            <Button
                title="IRR"
                onPress={() => navigation.navigate('Incident Reports')}
            />
            <Button
                title="Facility Example"
                onPress={() => navigation.navigate('EAP')}
            />
        </View>
    );
}

export { UniversityScreen };