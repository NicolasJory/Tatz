import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import NavBar from './components/NavBar';

import Add from './screens/Add';
import Settings from './screens/Settings';
import Map from './screens/Map';
import AddIdea from './screens/AddIdea';
import Profils from './screens/Profils/Profils'

const getFonts = () => {
 return Font.loadAsync({
     'rooters' : require('./assets/font/rooters/Rooters.ttf'),
     'rooters-italic' : require('./assets/font/rooters/RootersItalic.ttf'),
 })
};

const Stack = createNativeStackNavigator();


export default function App() {
    const [fontsLoadead, setFontsLoaded] = useState(false);

    if (fontsLoadead){
        return(
            
            <NavigationContainer>
                <Stack.Navigator initialRouteName="NavBar"  >
                    <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="Add" component={Add} />
                    <Stack.Screen name="Map" component={Map} />
                    <Stack.Screen name="AddIdea" component={AddIdea} />
                    <Stack.Screen name="Profils" component={Profils} />
                </Stack.Navigator> 
            </NavigationContainer>
        )
    }else{
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={()=>setFontsLoaded(true)}
                onError={console.warn}
            />
        );
        
    }
    
}