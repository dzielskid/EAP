/*=============================================================================
 |   File Purpose:  Starts app as whole
 |
 |       Author:  
 |     Language:  JavaScript
 |                      NAME OF THE COMPILER USED TO COMPILE IT WHEN IT
 |                      WAS TESTED
 |   To Compile:  in terminal run 'npm start' command
 |
 +-----------------------------------------------------------------------------
 |
 |  Description:  DESCRIBE THE PROBLEM THAT WAS WRITTEN TO
 |      SOLVE.
 |
 |        Input:  NONE
 |
 |       Output:  DESCRIBE THE OUTPUT PRODUCED.
 |
 |    Algorithm:  
 |
 |   Required Features Not Included:  Start on Main Screen
 |
 |   Known Bugs:  
 |
 *===========================================================================*/

 
import { useState} from 'react';
import { Button, TouchableOpacity, View, Text, Image, Alert, ScrollView, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { UniversityScreen } from './screens/UniversityScreen.js';
import { LoginScreen } from './screens/LoginScreen.js';
import { AccountScreen } from './screens/AccountScreen.js';
import { CreateAdminScreen } from './screens/CreateAdminScreen.js';
import { CreateEditorScreen } from './screens/CreateEditorScreen.js';
import { CreateInstitutionScreen } from './screens/CreateInstitution.js';
import { DeleteAdminScreen } from './screens/DeleteAdmin.js';
import { DeleteEditorScreen } from './screens/DeleteEditor.js';
import { DeleteInstitutionScreen } from './screens/DeleteInstitution.js';
import { EAPDisplayScreen } from './screens/EAPDisplayScreen.js';
import { IncidentReportsScreen } from './screens/IncidentReportsScreen.js';
import { IncidentResponseDisplayScreen } from './screens/IncidentResponseDisplayScreen.js';
import { InstitutionRequestsScreen } from './screens/InstitutionReuestsScreen.js';
import { InstitutionVerificationScreen } from "./screens/InstitutionVerficationScreen.js";
import { UploadEAPScreen } from "./screens/UploadEAPScreen.js";

import TimerContainer from "./components/Timer.js"
// import { searchInstitutions } from "./Database_Functions";

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Home" /* Intial screen as app loads, see Home function above*/>
            <Stack.Screen name="Institutions" component={HomeScreen} />
            <Stack.Screen name="Universities" component={UniversityScreen} />
            <Stack.Screen name="EAP" component={EAPDisplayScreen} />
            <Stack.Screen name="Incident Reports" component={IncidentReportsScreen} />
            <Stack.Screen name="Incident Report" component={IncidentResponseDisplayScreen} />
            <Stack.Screen name="Upload EAP" component={UploadEAPScreen} />

        </Stack.Navigator>
        )
}


function AccountStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Home" /* Intial screen as app loads, see Home function above*/>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Create Admin" component={CreateAdminScreen} />
            <Stack.Screen name="Create Editor" component={CreateEditorScreen} />
            <Stack.Screen name="Create Institution" component={CreateInstitutionScreen} />
            <Stack.Screen name="Delete Admin" component={DeleteAdminScreen} />
            <Stack.Screen name="Delete Editor" component={DeleteEditorScreen} />
            <Stack.Screen name="Delete Institution" component={DeleteInstitutionScreen} />
            <Stack.Screen name="Institution Requests" component={InstitutionRequestsScreen} />
            <Stack.Screen name="Verify Institutions" component={InstitutionVerificationScreen} />

        </Stack.Navigator>
    )
}

// Initial Screen on app opening
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center'}}
            // Flow: sidebar links:(Login, Account, Logout),    University
        >
            <Text style={{paddingVertical:50}}>Call 911 Button</Text>
            <TimerContainer />
            <Text style={{ paddingVertical: 50 }}>Searchbar</Text>
            <Button
                title="University Example"
                onPress={() => navigation.navigate('Universities')}
            />
        </View>
    );
}
//const [searchTerm, setTerm] = useState(""); // for search bar

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <Text style={{ textAlign: "center", paddingVertical: 20, fontSize: 20, backgroundColor: "grey", /**Change bgcolor to light grey*/}}>User Name</Text>
                <Text style={{ textAlign: "center", paddingBottom: 20, backgroundColor: "grey", /**color: "grey"*/}}>User Level</Text>
                <DrawerItemList {...props} />
                <DrawerItem label="Logout" onPress={() => {
                    //TODO Only enable if user is currently logged in, log out current user, toggle sidebar
                    console.log("Logged out.")
                }} />
            </DrawerContentScrollView>
        </View>
    )
}

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
                <Drawer.Screen name="Institutions" component={HomeStack} />
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Account" component={AccountStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
    {/**
        // console.log("App Starting..");
        return (
            <View style={styles.container}>
                <Button onPress={() => getData("/test2")} title="click" />
                <Text>{returnedData}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Search Institutions..."
                    onChangeText={(val) => setTerm(val)} //Sets searchTerm to whatever is typed in search textbox at any moment
                />
                <StatusBar style="auto" />
            </View>
        );
    */}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default App;