import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';

function AccountScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} /**
         Add Buttons for Accept New Institutions, Request New Institution, Create Admin, Remove Admin, Create Editor, Remove Editor, Logout*/>
            <Text>Account Screen</Text>
            <Button
                title="Accept New Institutions"
                onPress={() => navigation.navigate('Universitites')}
            />
            <Button
                title="Request New Institution"
                onPress={() => navigation.navigate('Create Institution')}
            />
            <Button
                title="Create Admin"
                onPress={() => navigation.navigate('Create Admin')}
            />
            <Button
                title="Remove Admin"
                onPress={() => navigation.navigate('Delete Admin')}
            />
            <Button
                title="Create Editor"
                onPress={() => navigation.navigate('Create Editor')}
            />
            <Button
                title="Remove Editor"
                onPress={() => navigation.navigate('Delete Editor')}
            />
            <Button
                title="Logout"
                onPress={() => {
                    Alert.alert('', 'User Logged Out')
                    navigation.goBack()
                }}
            />
        </View>
    );
}

export { AccountScreen };