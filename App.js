import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/NavBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Add from './screens/Add';
import Settings from './screens/Settings';
import Map from './screens/Map';
import HomeTopBar from './components/HomeTopBar';

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
                <Stack.Navigator initialRouteName="NavBar"  screenOptions={{   
                    headerShown: false,         
                }}  >
                    <Stack.Screen name="NavBar" component={NavBar} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="Add" component={Add} />
                    <Stack.Screen name="Map" component={Map} />
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