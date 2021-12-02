import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = width * 0.16;


export default class MessageTopBar extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={global.color} barStyle={'dark-content'}/>
                <View style={styles.header}>
                    <View style={styles.topStyle} >
                        <Image  style={styles.pp} source={require('../../assets/publications/pp.jpg')}/>
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
        backgroundColor:global.color,
        borderBottomWidth: 1,
        borderBottomColor: global.contrastColor,
        justifyContent: 'center',
    },
        header:{
            justifyContent: 'center',
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
                    borderColor: global.middleColor,
                    borderWidth: 1,
                },
                textStyle:{
                    paddingLeft: (width/25),
                    fontSize: (width/18),
                    color: global.contrastColor,
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