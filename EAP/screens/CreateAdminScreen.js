import * as React from 'react';
import { View, Text, Button } from 'react-native';

function CreateAdminScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            //Add button to "invite" that returns to the account screen
        >
            <Button
                title='Invite'
                onPress={() => {
                    navigation.goBack()
                    console.log('New Admin Added')
                }}
            />
            <Text>University Screen</Text>
        </View>
    );
}

export { CreateAdminScreen };