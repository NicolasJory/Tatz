import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions} from 'react-native';

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

const width = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();

const options = () => {
        return {
         headerStyle:{
            backgroundColor: "rgb(204, 179, 255)",
         },
         headerTintColor: 'rgba(96, 44, 201, 1)',
         headerTitleStyle:{
            fontSize: width/15,
            fontFamily: 'rooters',
         },
        };
    };

export default function App() {
    const [fontsLoadead, setFontsLoaded] = useState(false);

    if (fontsLoadead){
        return(
            
            <NavigationContainer>
                <Stack.Navigator initialRouteName="NavBar"  >
                    <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }} />
                    <Stack.Screen name="Settings" component={Settings} options={options()}/>
                    <Stack.Screen name="Add" component={Add} options={options()}/>
                    <Stack.Screen name="Map" component={Map} options={options()}/>
                    <Stack.Screen name="AddIdea" component={AddIdea} options={options()}/>
                    <Stack.Screen name="Profils" component={Profils} options={option=>
                        {
                            return {
                                title: option.route.params.params.artist,
                                headerStyle:{
                                   backgroundColor: "rgb(204, 179, 255)",
                                },
                                headerTintColor: 'rgba(96, 44, 201, 1)',
                                headerTitleStyle:{
                                   fontSize: width/15,
                                   fontFamily: 'rooters',
                                },
                               };
                           }
                        }
                        />
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