import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Search from './Search';
import Map from '../Map';
import Profils from '../Profils/Profils';
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



    export default function SearchNav() {
        return(
                <Stack.Navigator initialRouteName="Search"  >
                    <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
                    <Stack.Screen name="Map" component={Map} options={options()}/>
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
        )}
