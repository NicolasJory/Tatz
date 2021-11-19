import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';

import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Message from '../screens/Message/Message';
import Idea from '../screens/Idea/Idea';

const width = Dimensions.get('window').width;
const height = width * 0.125;

const TabArr = [
    {route: 'Home', label: 'Home', type: "Ionicons", activeIcon: 'home', component: Home},
    {route: 'Search', label: 'Search', type: "Ionicons", activeIcon: 'search',  component: Search},
    {route: 'Idea', label: 'Idea', type: "FontAwesome", activeIcon: 'anchor', component: Idea},
    {route: 'Message', label: 'Message', type: "MaterialCommunityIcons", activeIcon: 'message', component: Message},
    {route: 'Profil', label: 'Profil', type: "MaterialCommunityIcons", activeIcon: 'face', component: Home},
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);


    const anim1 = {0: {scale: .5, translateY: 0}, 1: {scale: 1.2, translateY: -12}};
    const anim2 = {0: {scale: 1.2, translateY: -12}, 1: {scale: 1, translateY: 0}};

    const circle1 = {0: {scale: .9}, 0.3: {scale: .9}, 0.5: {scale: .6}, 0.8: {scale: .8}, 1:{scale: 1}};
    const circle2 = {0: {scale: .8}, 1:{scale: 0}};

    useEffect(() => {
        if (focused) {
            viewRef.current.animate(anim1);
            circleRef.current.animate(circle1);
            textRef.current.transitionTo({scale: 1});
        } else {
            viewRef.current.animate(anim2);
            circleRef.current.animate(circle2);
            textRef.current.transitionTo({scale: 0});
        }
    }, [focused])

    return (
        <TouchableOpacity 
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}
        >
            <Animatable.View 
                ref={viewRef}
                duration={1000}
                style={styles.container}
            >
                <View style={styles.button}>
                    <Animatable.View 
                        ref = {circleRef}
                        style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(146, 110, 219, 1)', borderRadius: 25}}/>
                    <Icon type={item.type} size={(width/18)} name={item.activeIcon} color={focused ? "rgba(96, 44, 201, 1)" : "rgba(96, 44, 201, 0.5)"}/>
                </View>
                <Animatable.Text
                    ref={textRef}
                    style={{fontSize: (width/30), fontFamily: 'rooters',textAlign: 'center', color: 'rgba(96, 44, 201, 1)' }}
                >
                    {item.label}
                </Animatable.Text>
            </Animatable.View>  
        </TouchableOpacity>
    )
};

export default class NavBar extends React.Component {
    render (){
    return (
            <Tab.Navigator 
            
                screenOptions={{   
                    // "tabBarShowLabel": false,
                    "tabBarStyle": [
                    {
                        display: "flex",
                        position: 'absolute',
                        backgroundColor: 'rgb(204, 179, 255)',
                        height: height,
                    },
                    ],
                    headerShown: false,         
                }}  
            >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                            options={{
                                tabBarButton: (props) => <TabButton {...props} item={item} />
                            }} />
                )
            })} 
            </Tab.Navigator>
        )
        }
 }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',      
    },
    button: {
        width: (width/12),
        height: (width/12),
        borderRadius: 25,
        borderWidth: 4,
        borderColor: 'rgb(204, 179, 255)',
        backgroundColor: 'rgb(204, 179, 255)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});