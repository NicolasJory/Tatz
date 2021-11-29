import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Add from '../screens/Add';
import AddIdea from '../screens/AddIdea';
import Settings from '../screens/Settings';
import Map from '../screens/Map';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Message from '../screens/Message/Message';
import Idea from '../screens/Idea/Idea';
import Profil from '../screens/Profil/Profil';
import Profils from '../screens/Profils/Profils';
import Publications from '../components/Publications';

const width = Dimensions.get('window').width;
const height = width * 0.125;

const TabArr = [
    {route: 'HomeNav', label: 'Home', type: "Ionicons", activeIcon: 'home', component: HomeNav},
    {route: 'SearchNav', label: 'Search', type: "Ionicons", activeIcon: 'search',  component: SearchNav},
    {route: 'IdeaNav', label: 'Idea', type: "FontAwesome", activeIcon: 'anchor', component: IdeaNav},
    {route: 'MessageNav', label: 'Message', type: "MaterialCommunityIcons", activeIcon: 'message', component: MessageNav},
    {route: 'ProfilNav', label: 'Profil', type: "MaterialCommunityIcons", activeIcon: 'face', component: ProfilNav},
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

class NavBar extends React.Component {
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
 };


const headerOptions = () => {
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

const HomeStack = createNativeStackNavigator();

function HomeNav () {
    return (
                <HomeStack.Navigator initialRouteName="Home"  >
                    <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <HomeStack.Screen name="ProfilsNav" component={ProfilsNav} options={{headerShown: false}}/>
                </HomeStack.Navigator> 
    )};

const SearchStack = createNativeStackNavigator();

function SearchNav() {
    return(
            <SearchStack.Navigator initialRouteName="Search"  >
                <SearchStack.Screen name="Search" component={Search} options={{ headerShown: false }} />
                <SearchStack.Screen name="Map" component={Map} options={headerOptions()}/>
                <SearchStack.Screen name="ProfilsNav" component={ProfilsNav} options={{headerShown: false}}/>
            </SearchStack.Navigator> 
    )};

    
const IdeaStack = createNativeStackNavigator();

function IdeaNav() {
    return(
            <IdeaStack.Navigator initialRouteName="Idea"  >
                <IdeaStack.Screen name="Idea" component={Idea} options={{ headerShown: false }} />
                <IdeaStack.Screen name="AddIdea" component={AddIdea} options={headerOptions()}/>
            </IdeaStack.Navigator> 
    )};

const MessageStack = createNativeStackNavigator();

function MessageNav() {
    return(
            <MessageStack.Navigator initialRouteName="Message"  >
                <MessageStack.Screen name="Message" component={Message} options={{ headerShown: false }} />
            </MessageStack.Navigator> 
    )};
const ProfilStack = createNativeStackNavigator();

function ProfilNav() {
    return(
            <ProfilStack.Navigator initialRouteName="Profil"  >
                <ProfilStack.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
            </ProfilStack.Navigator> 
    )}

const ProfilsStack = createNativeStackNavigator();

function ProfilsNav (props) {
    return (
            <ProfilsStack.Navigator initialRouteName="Profils">
                <ProfilsStack.Screen name="Profils" children={()=><Profils navigation={props.navigation} pp={props.route.params.pp} studio={props.route.params.studio} artist= {props.route.params.artist}/>} options={()=>
                    {
                        return {
                            title: props.route.params.artist,
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
                    
                }/>
                <ProfilsStack.Screen name="Publications"  component={Publications} options={headerOptions()} />
            </ProfilsStack.Navigator> 
        )};


const MainStack = createNativeStackNavigator();

export default function Navigator () {
    return (
        <NavigationContainer>
                <MainStack.Navigator initialRouteName="NavBar"  >
                    <MainStack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }} />
                    <MainStack.Screen name="Settings" component={Settings} options={headerOptions()}/>
                    <MainStack.Screen name="Add" component={Add} options={headerOptions()}/>
                </MainStack.Navigator>                 
            </NavigationContainer>
    )
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
    }});