import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profils from '../Profils/Profils'
import Home from './Home';
import { Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();

const options = () => {
        return {
         headerStyle:{
            backgroundColor: "rgb(204, 179, 255)",
            style:{
                borderWidth: 2,
                bottomBorderColor: 'rgba(96, 44, 201, 1)',
             },
         },
         headerTintColor: 'rgba(96, 44, 201, 1)',
         headerTitleStyle:{
            fontSize: width/15,
            fontFamily: 'rooters',
         },
        };
    };



    export default function Home2() {
        return(
                <Stack.Navigator initialRouteName="Home"  >
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="Profils" component={Profils} options={option=>
                        {
                            return {
                                title: option.route.params.params.artist,
                                headerStyle:{
                                   backgroundColor: "rgb(204, 179, 255)",
                                },
                                headerTintColor: 'rgba(96, 44, Nav01, 1)',
                                headerTitleStyle:{
                                   fontSize: width/15,
                                   fontFamily: 'rooters',
                                },
                               };
                           }
                        }
                        />
                </Stack.Navigator> 
        )}
