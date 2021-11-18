import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import { Ionicons}  from '@expo/vector-icons'; 
import { Button } from 'react-native-elements/dist/buttons/Button';

const width = Dimensions.get('window').width;
const height = width * 0.16;


export default class MessageTopBar extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='rgb(204, 179, 255)' barStyle={'dark-content'}/>
                <View style={styles.header}>
                    <View style={styles.topStyle} >
                        <Image  style={styles.pp} source={require('../assets/publications/pp.jpg')}/>
                        <Text style={styles.textStyle}>User name</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width,
        height: height,
        backgroundColor: 'rgb(204, 179, 255)',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(96, 44, 201, 1)',
        justifyContent: 'center',
    },
        header:{
            justifyContent: 'center',
            height: (width/8),
        },
            topStyle:{
                margin:(width/30),   
                flexWrap: 'wrap', 
                alignItems: 'flex-start',
                flexDirection:'row', 
                alignItems:'center',
                justifyContent: 'center',
            },
                pp: {
                    borderRadius: 25,
                    height: (width/15),
                    width: (width/15),
                    borderColor: 'rgba(96, 44, 201, 1)',
                    borderWidth: 1,
                },
                textStyle:{
                    paddingLeft: (width/25),
                    fontSize: (width/18),
                    color: 'rgba(96, 44, 201, 1)',
                    fontFamily: "rooters",
                    width: (width/1.25),
                },
            icons:{
                flexDirection:'row',
                right:0,
                position: 'absolute',
                alignItems:'center',
            },
                iconStyle:{
                    marginRight: (width/20),
                },
});