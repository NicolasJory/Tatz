import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AddIdea from '../AddIdea'
import Idea from './Idea';
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



    export default function IdeaNav() {
        return(
                <Stack.Navigator initialRouteName="Idea"  >
                    <Stack.Screen name="Idea" component={Idea} options={{ headerShown: false }} />
                    <Stack.Screen name="AddIdea" component={AddIdea} options={options()}/>
                </Stack.Navigator> 
        )}
