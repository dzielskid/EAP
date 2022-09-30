import * as React from 'react';
import { Button, TouchableOpacity, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UniversityScreen } from './screens/UniversityScreen.js';


// Initial Screen on app opening
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Institutions Screen</Text>
            <Button
                title="Institution Example"
                onPress={() => navigation.navigate('University Screen')}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" /* Intial screen as app loads, see Home function above*/>
                <Stack.Screen
                    name="Institution Screen"
                    component={HomeScreen}
                    options={{
                       //use for logo headerTitle: (props) => 

                        //header styling
                        headerStyle: {
                            backgroundColor: '#707070',
                        },
                        headerTintColor: '#FFFFFF', //header text color

                        //Hamburger icon button to open sidebar options
                        headerRight: () =>
                            <TouchableOpacity
                                title=''
                                onPress={() => console.log('Header Button Pressed.')}
                                color="#D4DFE4"
                            >
                                <Image source={require("./assets/splash.png")} />
                            </TouchableOpacity>
                    }}
                />
                <Stack.Screen name="University Screen" component={ UniversityScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;