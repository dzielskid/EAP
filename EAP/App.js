import { useContext, userContext } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native';
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
import CallContainer from "./components/call911.js"
import SearchInstitutionContainer from './components/SearchInstitution.js';
// import { searchInstitutions } from "./Database_Functions";

import { LoginContext, LoginProvider } from "./Login_Context.js"

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
    const { isSignedIn, setSignedIn, username, setUsername, userLevel, setUserLevel } = useContext(LoginContext)
    return (
        <View style={{ flex: 1, alignItems: 'center' }}
        // Flow: sidebar links:(Login, Account, Logout),    University
        >
            <View style={styles.vSpace}/>
            <CallContainer />
            <TimerContainer />
            <SearchInstitutionContainer navigation={navigation}/>
        </View>
    );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
    const { isSignedIn, setSignedIn, username, setUsername, userLevel, setUserLevel } = useContext(LoginContext)
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={ styles.userInfoContainer }>
                    <Text style={isSignedIn ? styles.signedInUsername : styles.guestUsername}>{username}</Text>
                    <Text style={styles.userlevel}>{isSignedIn ? userLevel : ""}</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem label="Logout" onPress={() => {
                    //TODO Only enable if user is currently logged in, log out current user, toggle sidebar
                    if (isSignedIn) {
                        setSignedIn(false)
                        setUsername("Guest")
                        setUserLevel("Guest")
                        console.log("User logged out.")
                    } else {
                        console.log("No user to logout.")
                    }
                }} />
            </DrawerContentScrollView>
        </View>
    )
}

function App() {
    return (
        <LoginProvider>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
                    <Drawer.Screen name="Institutions" component={HomeStack} />
                    <Drawer.Screen name="Login" component={LoginScreen} />
                    <Drawer.Screen name="Account" component={AccountStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        </LoginProvider>

    );
}

const styles = StyleSheet.create({
    vSpace: {
        height: 30,
    },
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
    userInfoContainer: {
        backgroundColor: "#c2c2c2",
        height: 100,
        alignItems: "center",
    },
    guestUsername: {
        paddingTop: 10,
        fontSize: 30,
        height: 100,
    },
    signedInUsername: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 10,
        height: 50,
    },
    userlevel: {
        fontStyle: "italic",
        fontSize: 15,
    }
}); 

export default App;